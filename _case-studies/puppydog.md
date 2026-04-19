---
title: "PuppyDog.io — Personalized Demo Infrastructure at Scale"
excerpt: "How I built a mass personalization engine, migrated AI compute from AWS to GCP saving 36% on infra costs, and took backend test coverage from 0 to 75% as the sole backend engineer."
coverImage: "/assets/logos/puppydog.webp"
date: "2026-04-17T00:00:00.000Z"
author:
  name: Umair Jibran
  picture: "/assets/authors/jibran.webp"
ogImage:
  url: "/assets/logos/puppydog.webp"
tags:
  - Node.js
  - GCP
  - AWS
  - Architecture
  - AI/LLM
---

## The Problem

Sales and marketing teams know that personalized demos convert dramatically better than generic ones. But producing a tailored walkthrough for each prospect — researching the company, role, and industry, writing a custom script, and re-recording the product for every variation — takes days of work per lead. In practice, personalization at scale simply does not happen; teams fall back on generic demos that underperform.

PuppyDog collapses that multi-day per-prospect pipeline to minutes. A user uploads a base demo once. The system fans it out into fully personalized renders for every prospect on their list, with narration, visuals, and messaging tuned per company and role — automatically.

---

## My Role

When I joined, PuppyDog had a twelve-person engineering org. The team has since contracted significantly. I now own backend, DevOps, and AI/ML as a single person, while also managing two frontend engineers and one QA engineer. I report to the VP of Engineering.

**What I built and own:**
- **Mass personalization system** — the core product differentiator: takes a single base demo and fans out personalized renders for prospect lists from 10 to 10,000+ entries per job, no hard ceiling.
- **CRM and tooling integrations** — HubSpot, Salesforce, SmartLead, and a Slack slash command, feeding prospects into the pipeline.
- **Audio overlay system** — matured the pipeline, ran experiments across lip-sync models, improved script generation quality.
- **GCP AI compute migration** — moved the entire AI worker layer from AWS EC2 to GCP.
- **Test coverage lift** — 0% → ~75%, done incrementally alongside feature work.

---

## Architecture

**Stack:** Node.js / Express monolith on AWS App Runner · MySQL · CloudFront · SQS · Python AI workers on GCP VMs + Cloud Run · Remotion renders on Lambda · React frontend · Datadog observability.

Two architectural decisions shaped everything else.

### 1. Only the API server touches the database

When I designed the mass personalization pipeline, the conventional move was to push CSV ingestion and enrichment to a dedicated SQS-consuming service. I rejected it: a second service with production database credentials would add operational and security cost the team size did not justify.

Instead, the pipeline lives inside the API server — a cron that pulls 100 unprocessed prospects every five minutes and processes them in batches of ten. This gives natural backpressure against downstream API rate limits (ElevenLabs, enrichment providers). Every service outside the API server is strictly stateless: messages in, messages out over SQS, with results posted back through a signed HTTP callback. No shared database, ever.

The constraint shaped the entire system and has held up.

### 2. Cloud Run streaming for long-running GPU inference

Some AI operations run long enough that a synchronous HTTP call would block the API server or time out. Keeping a warm GPU pool 24/7 is expensive. We tried Cloud Run workers consuming Pub/Sub — the minimum-instance floor was not defensible at our traffic shape because Cloud Run workers do not scale to zero.

The solution: deploy as Cloud Run HTTP services that **stream an immediate first-response chunk** back to the API server, releasing the connection. Inference completes in the background, results post back via the same signed callback. We get true scale-to-zero on idle, per-request GPU pricing, and the API server is never blocked on GPU work.

---

## Key Decisions & Tradeoffs

### The partial cloud migration

The original plan was a full-stack migration to GCP — GPU pricing on GCP was meaningfully cheaper than EC2, a real lever for an AI-heavy product. Two weeks into scoping with an external DevOps advisor, the picture changed: the Node backend had deep AWS coupling (IAM patterns, Secrets Manager) that would take weeks to untangle, and almost none of the cost savings lived in that layer. The savings were concentrated in the GPU workers.

I stopped the full migration and moved only the AI compute. The Node backend stays on AWS App Runner with SQS and MySQL; the Python AI workers now run on GCP VMs and Cloud Run; the two sides communicate over SQS (outbound jobs) and signed HTTP callbacks (results).

**Cost accepted:** permanent hybrid-cloud topology — two IAM systems, two observability surfaces, cross-cloud egress to reason about, a signing scheme to maintain.

**What I bought:** the GPU cost savings landed almost immediately without a multi-month engineering project blocking product work. For a one-person backend team, that was the right trade.

### 0 → 75% test coverage without a coverage sprint

I could not afford to stop shipping for a dedicated test coverage sprint as the sole backend engineer. Coverage went from effectively zero to ~75% incrementally, layered on top of feature work. The lift directly enabled daily releases — it reduced the frequency of regressions reaching production, which is what makes daily shipping viable in practice.

---

## Outcomes

| Metric | Result |
|---|---|
| Infrastructure cost | **−36%** after AI compute migrated to GCP |
| Release cadence | **Every 2 weeks → daily** |
| Backend test coverage | **0% → ~75%** |
| Personalization scale | **10 to 10,000+ prospects per job**, unattended |

On product outcomes: the team reported that mass personalization and expanded audio/video capabilities drove measurable engagement lifts and multiple customer upgrades to higher-tier plans. I flag these as reported, not instrumented by me — the attribution runs through the product and sales funnel.

---

## Lesson Learned

Decisions made under time pressure during execution should have been made deliberately during scoping. The GCP migration revealed AWS coupling in the Node backend two weeks in — the coupling audit should have happened before the migration started, not after, so the redirect was made under sunk-cost pressure rather than on a clean slate.

The larger version: the no-shared-database rule has held up and shaped the architecture well, but I did not write down the conditions under which it should be revisited. **Every opinionated architectural rule needs an explicit, named sunset trigger** — some combination of team size, traffic shape, or feature pressure — so it has a built-in review rather than relying on someone noticing it has outlived its usefulness.
