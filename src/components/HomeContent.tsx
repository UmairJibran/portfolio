"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Calendar,
  Building2,
  Quote,
  Type,
  Globe,
  MapPin,
} from "lucide-react";
import { ExperienceDialog } from "@/components/ExperienceDialog";
import { SkillsSection } from "@/components/SkillsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { WorkingTogether } from "@/components/WorkingTogether";
import { ContributionGraph } from "@/components/ContributionGraph";
import { RecentWriting } from "@/components/RecentWriting";
import { Terminal, type TerminalLine } from "@/components/Terminal";
import { SectionHeading, Em } from "@/components/SectionHeading";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";
import testimonials from "@/data/testimonials.json";
import hiring from "@/data/hiring.json";
import { WRITING_URL, writingLinkProps } from "@/lib/writing";
import type { Story } from "@/types/story";
import type { ITestimonial } from "@/types/testimonial";

type Experience = {
  company: string;
  website: string;
  position: string;
  startDate: string;
  endDate: string | null;
  oneLine: string;
  bullets: string[];
  volunteer: boolean;
};

const companyLogos: Record<string, string> = {
  "PuppyDog.io": "/assets/logos/puppydog.webp",
  Productbox: "/assets/logos/productbox.webp",
  "IM Sciences": "/assets/logos/imsciences.webp",
  Microsoft: "/assets/logos/microsoft.webp",
  Ideometrix: "/assets/logos/ideometrix.webp",
};

/* The hero transcript. Identity and availability only — the numbers live in
   the stats strip below it, so the two don't repeat each other. */
const HERO_SESSION: TerminalLine[] = [
  { kind: "command", text: "whoami" },
  { kind: "output", text: "umair jibran — backend · devops · ai/llm engineer" },
  { kind: "blank" },
  { kind: "command", text: "cat ./current-role.txt" },
  {
    kind: "info",
    text: "sole backend, devops & ai/ml engineer at puppydog.io",
  },
  { kind: "output", text: "also managing 2 frontend engineers and 1 qa" },
  { kind: "blank" },
  { kind: "command", text: "./availability --check" },
  { kind: "success", text: "open to full-time remote roles" },
  { kind: "success", text: "open to relocation — eu / north america" },
  { kind: "warn", text: "utc+5 — full day overlap with europe" },
];

const STATS: { value: string; label: string }[] = [
  { value: "10k+", label: "Prospects per job" },
  { value: "−36%", label: "Infra cost, AWS→GCP" },
  { value: "0→75%", label: "Backend coverage" },
  { value: "−80%", label: "Media pipeline cost" },
];

const SOCIAL_ICONS = {
  GitHub: Github,
  Linkedin,
  Twitter,
  Mail,
  Type,
} as const;

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pt-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-12">
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-xs text-brand">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            ~/umairjibran · {hiring.availability.toLowerCase()}
          </div>

          <h1 className="mb-5 text-[32px] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[44px]">
            I build backend systems, LLM pipelines, and the{" "}
            <Em>integrations</Em> between them.
          </h1>

          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-faint">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {hiring.base.city}, Pakistan ({hiring.base.timezone}) ·{" "}
            {hiring.preferredRegions.join(" / ")}
          </div>

          <div
            className="mb-8 max-w-2xl text-[15px] leading-relaxed text-muted-foreground [&_a]:text-link [&_a]:hover:underline [&_img]:mx-1 [&_img]:inline-block [&_img]:h-[18px] [&_img]:w-[18px] [&_strong]:font-medium [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: profile.extraInfo }}
          />

          <div className="mb-6 flex flex-wrap gap-2">
            {profile.social.map((item) => {
              const Icon =
                SOCIAL_ICONS[item.icon as keyof typeof SOCIAL_ICONS] ?? Globe;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-edge hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {item.name.toLowerCase()}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:bg-link-hover"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Get in touch
            </Link>
            <Link
              href={profile.consultationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-edge px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/60 hover:bg-card"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Schedule a call
            </Link>
          </div>
        </div>

        <div className="min-w-0 lg:pt-2">
          <Terminal title="~/umairjibran — zsh" lines={HERO_SESSION} />
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="mb-1 font-mono text-[11px] uppercase tracking-wider text-faint">
              {stat.label}
            </dt>
            <dd className="font-mono text-2xl font-medium text-brand md:text-3xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function FeaturedCaseStudy({ study }: { study: Story }) {
  return (
    <Link
      href={study.url}
      {...writingLinkProps}
      className="panel panel-hover group block p-6 md:p-8"
    >
      <div className="mb-3 font-mono text-xs text-brand">
        featured case study
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-link md:text-2xl">
        {study.title}
      </h3>
      <p className="mb-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        {study.excerpt}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {study.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-xs text-link transition-all group-hover:gap-2">
          read on quill
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
      </div>
    </Link>
  );
}

function monthYear(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function duration(start: Date, end: Date) {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

/* One role, as a commit in a log: a node on the rail, the headline, and the
   summary. The whole row opens the detail dialog — on every breakpoint, which
   the previous alternating timeline only managed on desktop. */
function RoleRow({ role }: { role: Experience }) {
  const [open, setOpen] = useState(false);
  const start = new Date(role.startDate);
  const end = role.endDate ? new Date(role.endDate) : new Date();
  const current = !role.endDate;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="group relative block w-full pb-10 pl-8 text-left last:pb-0 md:pl-10"
      >
        {/* Rail node */}
        <span
          aria-hidden
          className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-colors ${
            current
              ? "border-brand bg-brand"
              : "border-edge bg-background group-hover:border-brand"
          }`}
        />
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span
            className={`logo-tile h-11 w-11 ${
              companyLogos[role.company]
                ? "group-hover:bg-white"
                : "bg-secondary/80 ring-edge/40"
            }`}
          >
            {companyLogos[role.company] ? (
              <Image
                src={companyLogos[role.company]}
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-contain p-1.5"
              />
            ) : (
              <Building2 className="h-5 w-5 text-faint" aria-hidden />
            )}
          </span>
          <span className="font-medium text-foreground transition-colors group-hover:text-link">
            {role.position}
          </span>
          <span className="font-mono text-xs text-faint">@</span>
          <span className="font-mono text-sm text-muted-foreground">
            {role.company}
          </span>
          {role.volunteer && (
            <span className="rounded border border-info/40 bg-info/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-info">
              volunteer
            </span>
          )}
        </div>
        <div className="mt-2 font-mono text-[11px] text-faint">
          {monthYear(start)} — {current ? "present" : monthYear(end)} ·{" "}
          {duration(start, end)}
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {role.oneLine}
        </p>
        <span className="mt-2 inline-block font-mono text-[11px] text-faint transition-colors group-hover:text-link">
          show details →
        </span>
      </button>

      <ExperienceDialog experience={role} open={open} onOpenChange={setOpen} />
    </>
  );
}

function testimonialLinks(testimonial: ITestimonial) {
  return [
    testimonial.linkedin && {
      label: "LinkedIn",
      href: `https://linkedin.com/in/${testimonial.linkedin}`,
      Icon: Linkedin,
    },
    testimonial.twitter && {
      label: "X (Twitter)",
      href: `https://x.com/${testimonial.twitter}`,
      Icon: Twitter,
    },
    testimonial.personalSite && {
      label: "Website",
      href: testimonial.personalSite,
      Icon: Globe,
    },
    testimonial.email && {
      label: "Email",
      href: `mailto:${testimonial.email}`,
      Icon: Mail,
    },
  ].filter(Boolean) as { label: string; href: string; Icon: typeof Mail }[];
}

/* A static masonry-ish grid rather than the old timed carousel: every quote is
   readable at once, in the HTML, with no rotation to wait through. */
function TestimonialCard({ testimonial }: { testimonial: ITestimonial }) {
  return (
    <figure className="panel panel-hover flex h-full flex-col p-6">
      <Quote className="mb-4 h-5 w-5 shrink-0 text-brand/70" aria-hidden />
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85">
        {testimonial.testimonial}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium text-foreground">
            {testimonial.name}
          </div>
          <div className="truncate font-mono text-[11px] text-faint">
            {testimonial.designationAtTime}
            {testimonial.employerAtTime
              ? ` · ${testimonial.employerAtTime}`
              : ""}
          </div>
        </div>
        <div className="flex shrink-0 items-center">
          {testimonialLinks(testimonial).map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={`${testimonial.name}'s ${label}`}
              className="p-1.5 text-faint transition-colors hover:text-link"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </Link>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export function HomeContent({ stories }: { stories: Story[] }) {
  // Newest case study is featured; latest writing is the newest post besides it
  const featured = stories.find((story) => story.type === "case-study");
  const latestStory = stories.find((story) => story !== featured);

  return (
    <main className="grain min-h-screen">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SkillsSection />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <IntegrationsSection />
      </section>

      {(featured || latestStory) && (
        <section className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            command="ls ./writing"
            title={
              <>
                Case studies &amp; <Em>writing</Em>
              </>
            }
            action={
              <Link
                href={WRITING_URL}
                {...writingLinkProps}
                className="inline-flex items-center gap-1 font-mono text-xs text-link transition-colors hover:text-link-hover"
              >
                view all on quill
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
            }
          />
          <div className="space-y-4">
            {featured && <FeaturedCaseStudy study={featured} />}
            {latestStory && <RecentWriting story={latestStory} compact />}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          command='git log --author="umair" --oneline'
          title={
            <>
              Where I&apos;ve <Em>worked</Em>
            </>
          }
        />
        <div className="relative ml-1.5 md:ml-2">
          {/* The rail, fading out past the last role rather than stopping dead. */}
          <span
            aria-hidden
            className="absolute bottom-10 left-0 top-2 w-px bg-gradient-to-b from-edge via-edge/60 to-transparent"
          />
          {experience.map((role) => (
            <RoleRow key={`${role.company}-${role.startDate}`} role={role} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <ContributionGraph username="umairjibran" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          command="cat ./references/*.txt"
          title={
            <>
              What people <Em>say</Em>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <WorkingTogether />

      <footer className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="rounded-lg border border-border bg-card/40 p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-1 font-mono text-xs text-brand">
                $ echo $CONTACT
              </div>
              <p className="text-lg font-medium text-foreground">
                {profile.email}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {hiring.availability} · {hiring.roleTypes.join(" or ")}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:bg-link-hover"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Get in touch
              </Link>
              <Link
                href={profile.consultationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-edge px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/60 hover:bg-card"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Schedule a call
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name.firstName}{" "}
          {profile.name.lastName} · built with next.js
        </p>
      </footer>
    </main>
  );
}
