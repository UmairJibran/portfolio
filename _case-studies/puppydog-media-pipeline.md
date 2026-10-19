---
title: "PuppyDog.io — Eleven Services, One GPU, 80% Leaner"
excerpt: "How I split a tightly coupled media pipeline into eleven independent, queue-driven services, confined the GPU to the one workload that needs it, and cut monthly infrastructure cost by about 80%."
coverImage: "/assets/logos/puppydog.webp"
date: "2026-10-20T00:00:00.000Z"
author:
  name: Umair Jibran
  picture: "/assets/authors/jibran.webp"
ogImage:
  url: "/assets/logos/puppydog.webp"
tags:
  - Python
  - Architecture
  - Docker
  - GPU
  - Kubernetes
  - DevOps
---

## The Problem

PuppyDog's media pipeline turns raw inputs into finished, personalized videos: it ingests recordings, generates scripts, renders templates, converts documents and lip-syncs AI presenters. Over time it had grown into several long-running worker processes spread across three repositories, and all of it shipped as one unit. Every machine in the fleet ran every worker.

That shape had three costs:

- **GPU capacity spent on CPU work.** Most of our workload ran through just three services, and none of them used a GPU. But because every machine ran every worker, handling that load meant buying more expensive GPU machines, which drove the bill up.
- **Coupling through the filesystem.** The repositories depended on each other's directory layout and shared working directories, not on clean imports. A change in one could break another at runtime.
- **Duplicated infrastructure.** Logging, storage access and queue handling had each been written several times, and the copies had drifted apart.

Nothing could scale, deploy or fail on its own.

---

## My Role

I own backend, DevOps and AI/ML at PuppyDog. I set the goals for this project: one independently scalable service per job type, a GPU only where the work needs one, and no lock-in to a single platform. I wrote the migration plan, carried out every phase, ran a structured post-migration review, and brought the new fleet up end to end in a non-production environment, including its CI/CD.

---

## Architecture

**Before:** three repositories → one bundle → every worker on every GPU machine.

**After:** one monorepo:

- **Shared libraries.** A core runtime library covers configuration, logging, the queue worker loop, storage, callbacks and graceful shutdown. Smaller libraries cover media processing, LLM clients and the lip-sync contract.
- **11 services.** Each consumes one message queue, ships as its own container image, and scales on its own queue depth.
- **3 base images.** One for media work, one adding a headless browser and document tooling, and one for the GPU model.
- **One fleet manifest.** A single file describes every service, and thin adapters render it for Kubernetes, managed serverless container platforms or a plain VM.

Services never read each other's files. They talk only through queue messages and object storage. The message formats the rest of the product depends on stayed exactly as they were, so an old and a new version of a service can share a queue during cut-over without changing anything upstream.

I imported all three repositories with their full history, then moved code in small, reviewable steps, so `git blame` still traces every line to its original author.

---

## Key Decisions & Tradeoffs

### The GPU becomes one service, behind a queue

Only the lip-sync model actually needs a GPU, yet several workers used to invoke it directly mid-pipeline. Now it sits behind a dedicated service. A caller puts a job on its queue, waits for the result in object storage, and keeps its own message alive while it waits. The model code is wrapped rather than modified, so swapping models later means changing a client backend, not rewriting every pipeline that uses it.

I chose a queue over an HTTP API because queue depth is a natural scaling signal and scales to zero. There's no load balancer, and no request timeout to fight on long-running jobs.

**Cost accepted:** callers hold a CPU slot while they wait, and the caller's timeout and the worker's timeout must agree, or a backlog turns into duplicate GPU jobs. Requests now carry the caller's deadline, and the worker skips work that has already expired.

### Portable over platform-specific

I was leaning toward Kubernetes, but I didn't want any service to assume it. So instead of picking a platform, the plan defines one contract every container follows, implemented once in the core library:

- Configuration comes only from environment variables and is validated at startup.
- Every service exposes standard health, readiness and metrics endpoints.
- On shutdown a service stops taking work, then finishes or releases its current job.
- Delivery is at least once, and a job ledger makes a redelivered job that already finished skip straight to its callback.

The platform's job shrinks to "run this image, give it a GPU if it asks for one, and scale it on this queue." That paid off quickly: the first real deployment landed on a different platform than the one I'd planned for, and it needed no service code changes, only CI and configuration.

**Cost accepted:** designing for the lowest common denominator. Long jobs won't finish inside every platform's shutdown window, so nothing depends on finishing during shutdown. Correctness comes from redelivery plus the job ledger.

### GPU encoding is an explicit switch, not a probe

After the split, most services ran on CPU, but the encoding code either probed for hardware encoders on every start or hard-coded the CPU encoder. I replaced both with one setting (CPU only, GPU, or auto-detect) and routed every encode through it. Any service can now opt into an inexpensive GPU for NVENC/NVDEC hardware encoding, while the high-end GPU stays reserved for the model.

The setting applies per service, not per job. Several pipelines join segments with a stream copy, and mixing CPU-encoded and GPU-encoded segments in one MP4 breaks playback.

### Fix and delete before moving anything

Before importing a line, I spent a phase in the old repositories fixing reliability issues and deleting dead code, so neither would be carried into the new structure.

**Cost accepted:** an extra phase before any visible progress, and open branches had to land first, because commits can't be rebased across a history import.

---

## Outcomes

| Metric | Result |
|---|---|
| Monthly infrastructure cost | **~80% lower** |
| Repositories | **3 → 1**, with full history kept |
| Deployable units | **1 bundle on every machine → 11 independently scaled services** |
| Services that need a GPU | **Every machine → 1 service**; others can optionally use an inexpensive GPU for encoding |
| Idle capacity | **Most services scale to zero** when their queue is empty |
| Shared infrastructure | Duplicated logging, storage and queue code → **one shared runtime** |
| Tests | **~1,200** across libraries, deploy tooling and services |
| Service code changed for the first platform | **None**, only CI and configuration |

The new shape is what makes that possible: instead of every machine carrying a GPU around the clock, one service holds one, and most of the fleet scales to zero between jobs. The new environment isn't billed at standard rates yet, so the figure is an estimate, not an invoice.

The whole fleet runs end to end in its new environment, including the GPU service, and deploys automatically on merge.

<!-- TODO: replace the cost estimate with billed figures once the new environment is on standard rates. -->

---

## Lesson Learned

Every service came with tests, and the post-migration review still found issues that would have stopped jobs from running in containers. None of them were logic bugs. They were environment assumptions: file paths that changed meaning once workspaces moved, permission assumptions that broke for a non-root user, and CI triggers pointing at the wrong branch.

A migration moves code into a new environment, and the environment is where it breaks. **Test the artifact, not the source.** A contract test that starts the real image, sends it a real message and stops it mid-job would have caught most of these in minutes. Ours checked the health endpoints but never sent a message. Next time, that's the first thing I'll write, before moving the first service.
