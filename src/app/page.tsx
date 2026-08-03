"use client";

import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Type,
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Calendar,
  Building2,
  Quote,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceDialog } from "@/components/ExperienceDialog";
import { RecentWriting } from "@/components/RecentWriting";
import { SkillsSection } from "@/components/SkillsSection";
import { ContributionGraph } from "@/components/ContributionGraph";
import { MapPin } from "lucide-react";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";
import testimonials from "@/data/testimonials.json";
import { getAllBlog } from "@/lib/api";
import { Story } from "@/types/story";

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

// Company logos mapping
const companyLogos: Record<string, string> = {
  "PuppyDog.io": "/assets/logos/puppydog.webp",
  Productbox: "/assets/logos/productbox.webp",
  "IM Sciences": "/assets/logos/imsciences.webp",
  Microsoft: "/assets/logos/microsoft.webp",
  Ideometrix: "/assets/logos/ideometrix.webp",
};

// Experience Card Component with dark theme - now for timeline
function ExperienceTimelineItem({
  experience,
  index,
  isLeft,
}: {
  experience: Experience;
  index: number;
  isLeft: boolean;
}) {
  const [showDetails, setShowDetails] = useState(false);

  // Calculate duration
  const startDate = new Date(experience.startDate);
  const endDate = experience.endDate
    ? new Date(experience.endDate)
    : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const duration =
    years > 0
      ? `${years} yr${years > 1 ? "s" : ""} ${remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}` : ""}`
      : `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;

  return (
    <>
      <div
        className={`flex items-center gap-8 mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      >
        {/* Card */}
        <div className="w-[calc(50%-2rem)]">
          <div
            className="group bg-card border border-border rounded-lg p-6 hover:border-brand transition-all duration-300 cursor-pointer brutal:border-2 brutal:border-black brutal:shadow-hard brutal:hover:shadow-hard-lg brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:hover:border-black"
            onClick={() => setShowDetails(true)}
          >
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden brutal:border-2 brutal:border-black">
                {companyLogos[experience.company] ? (
                  <Image
                    src={companyLogos[experience.company]}
                    alt={experience.company}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <Building2 className="w-6 h-6 text-muted-foreground" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-foreground font-semibold text-base mb-1 group-hover:text-link transition-colors">
                  <div className="flex items-center gap-2">
                    {experience.position}
                    {experience.volunteer && (
                      <span
                        className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-blue-900/30 border border-blue-700/50 text-blue-300 text-xs font-medium brutal:bg-brand brutal:border-black brutal:text-black brutal:font-bold"
                        title="Volunteer"
                      >
                        Volunteer
                      </span>
                    )}
                  </div>
                </h3>
                <Link
                  href={experience.website}
                  target="_blank"
                  className="text-muted-foreground text-sm hover:text-link transition-colors inline-flex items-center gap-1 mb-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.company}
                  <ExternalLink className="w-3 h-3" />
                </Link>
                <p className="text-faint text-xs mb-3">
                  {startDate.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {experience.endDate
                    ? endDate.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "Present"}{" "}
                  · {duration}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {experience.oneLine}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline dot and line */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-brand rounded-full border-4 border-background z-10 brutal:bg-black brutal:border-0"></div>
        </div>

        {/* Empty space on the other side */}
        <div className="w-[calc(50%-2rem)]"></div>
      </div>

      <ExperienceDialog
        experience={experience}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
}

// Testimonial Carousel Component - Center spotlight with timed transitions
function TestimonialsCarousel({ testimonials }: { testimonials: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const currentTestimonial = testimonials[currentIndex];
    const charCount = currentTestimonial.testimonial.length;
    const displayTime = charCount * 60; // 0.06s = 60ms per character

    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, displayTime);

    return () => clearTimeout(timer);
  }, [currentIndex, testimonials]);

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex items-center justify-center gap-6 px-6">
        {/* Previous Testimonial (Left, smaller) */}
        <div className="hidden lg:block w-[300px] opacity-40 transform scale-90 transition-all duration-500">
          <div className="bg-card border border-border rounded-lg p-5 h-[280px] flex flex-col">
            <Quote className="w-6 h-6 text-link mb-3 flex-shrink-0" />
            <p className="text-foreground/80 text-xs leading-relaxed mb-4 line-clamp-4 flex-1">
              {testimonials[getTestimonialIndex(-1)].testimonial}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonials[getTestimonialIndex(-1)].image}
                alt={testimonials[getTestimonialIndex(-1)].name}
                width={32}
                height={32}
                className="rounded-full brutal:border-2 brutal:border-black"
              />
              <div className="flex-1 min-w-0">
                <div className="text-foreground font-semibold text-xs truncate">
                  {testimonials[getTestimonialIndex(-1)].name}
                </div>
                <div className="text-faint text-xs truncate">
                  {testimonials[getTestimonialIndex(-1)].designationAtTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Testimonial (Center, larger) */}
        <div
          className={`w-full max-w-2xl transition-all duration-500 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
          <div className="bg-card border-2 border-brand rounded-lg p-8 shadow-xl shadow-brand/10 brutal:shadow-[6px_6px_0_0_#ffd400] brutal:border-black">
            <Quote className="w-10 h-10 text-link mb-6" />
            <p className="text-foreground/90 text-base leading-relaxed mb-8">
              {testimonials[currentIndex].testimonial}
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={56}
                height={56}
                className="rounded-full brutal:border-2 brutal:border-black"
              />
              <div className="flex-1">
                <div className="text-foreground font-bold text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].designationAtTime}
                </div>
                <div className="text-faint text-xs mt-1">
                  {testimonials[currentIndex].employerAtTime}
                </div>
              </div>
              {testimonials[currentIndex].linkedin && (
                <Link
                  href={
                    "https://linkedin.com/in/" +
                    testimonials[currentIndex].linkedin
                  }
                  target="_blank"
                  className="text-faint hover:text-link transition-colors p-2"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Next Testimonial (Right, smaller) */}
        <div className="hidden lg:block w-[300px] opacity-40 transform scale-90 transition-all duration-500">
          <div className="bg-card border border-border rounded-lg p-5 h-[280px] flex flex-col">
            <Quote className="w-6 h-6 text-link mb-3 flex-shrink-0" />
            <p className="text-foreground/80 text-xs leading-relaxed mb-4 line-clamp-4 flex-1">
              {testimonials[getTestimonialIndex(1)].testimonial}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonials[getTestimonialIndex(1)].image}
                alt={testimonials[getTestimonialIndex(1)].name}
                width={32}
                height={32}
                className="rounded-full brutal:border-2 brutal:border-black"
              />
              <div className="flex-1 min-w-0">
                <div className="text-foreground font-semibold text-xs truncate">
                  {testimonials[getTestimonialIndex(1)].name}
                </div>
                <div className="text-faint text-xs truncate">
                  {testimonials[getTestimonialIndex(1)].designationAtTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`h-2 rounded-full transition-all duration-300 brutal:border brutal:border-black ${
              index === currentIndex
                ? "w-8 bg-brand"
                : "w-2 bg-border hover:bg-edge"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [latestBlog, setLatestBlog] = useState<Story | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchLatest() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) return;
        const data = await res.json();
        const blogs: Story[] = data.blogs || [];
        if (mounted && blogs.length > 0) {
          setLatestBlog(blogs[0]);
        }
      } catch (err) {
        // ignore
      }
    }

    fetchLatest();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="bg-background min-h-screen grain">
      {/* Hero Section - Dark Theme */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Title */}
        <h1 className="text-foreground text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Software engineer building backend systems,
          <br />
          LLM workflows & open-source tools
        </h1>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-md bg-brand/10 border border-brand/30 text-link text-sm font-medium brutal:bg-brand brutal:border-2 brutal:border-black brutal:text-black brutal:font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 brutal:hidden"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand brutal:bg-black"></span>
          </span>
          <MapPin className="h-3.5 w-3.5" />
          Open to relocation · EU / North America · Remote-friendly
        </div>

        {/* Description */}
        <div
          className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl [&_a]:text-link [&_a]:hover:underline [&_strong]:text-foreground [&_strong]:font-medium [&_img]:inline-block [&_img]:w-5 [&_img]:h-5 [&_img]:mx-1"
          dangerouslySetInnerHTML={{ __html: profile.extraInfo }}
        />

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-6">
          {profile.social.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card hover:bg-secondary border border-border rounded-md text-foreground/80 hover:text-foreground transition-colors text-sm brutal:border-2 brutal:border-black brutal:shadow-hard brutal:hover:shadow-hard-lg brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:hover:border-black brutal:transition-all"
              target="_blank"
            >
              {item.icon === "GitHub" && <Github className="h-4 w-4" />}
              {item.icon === "Linkedin" && <Linkedin className="h-4 w-4" />}
              {item.icon === "Twitter" && <Twitter className="h-4 w-4" />}
              {item.icon === "Mail" && <Mail className="h-4 w-4" />}
              {item.icon === "Type" && <Type className="h-4 w-4" />}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Primary CTAs — above the fold */}
        <div className="flex flex-wrap gap-3 mb-16">
          <Button
            asChild
            className="bg-primary hover:bg-primary-hover text-primary-foreground brutal:border-2 brutal:border-black brutal:shadow-hard-sm brutal:hover:shadow-hard brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:font-bold brutal:uppercase"
          >
            <Link href={`mailto:${profile.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-edge text-foreground bg-transparent hover:bg-secondary hover:border-brand hover:text-foreground brutal:bg-card brutal:border-2 brutal:shadow-hard-sm brutal:hover:shadow-hard brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:font-bold brutal:uppercase brutal:hover:border-black"
          >
            <Link href={profile.consultationLink} target="_blank">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Call
            </Link>
          </Button>
        </div>

        {/* Skills Section */}
        <SkillsSection />

        {/* Featured Case Study */}
        <div className="mb-16">
          <Link
            href="/projects/puppydog"
            className="group block bg-card noir:bg-gradient-to-br noir:from-[#1a1a1a] noir:to-[#141414] border border-border hover:border-brand/60 rounded-lg p-6 md:p-8 transition-all duration-300 brutal:border-2 brutal:border-black brutal:shadow-[6px_6px_0_0_#ffd400] brutal:hover:shadow-[8px_8px_0_0_#ffd400] brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:hover:border-black"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-link" />
              <span className="text-link text-xs uppercase tracking-wider font-mono brutal:bg-brand brutal:text-black brutal:px-1 brutal:font-bold">
                Featured Case Study
              </span>
            </div>
            <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-3 group-hover:text-link transition-colors">
              PuppyDog.io — Personalized Demo Infrastructure at Scale
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5 max-w-3xl">
              How I built a mass personalization engine, migrated AI compute
              from AWS to GCP saving 36% on infra costs, and took backend test
              coverage from 0 to 75% as the sole backend engineer.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
              <div>
                <div className="text-link text-2xl font-bold font-mono">
                  −36%
                </div>
                <div className="text-faint text-xs">Infra cost</div>
              </div>
              <div>
                <div className="text-link text-2xl font-bold font-mono">
                  0 → 75%
                </div>
                <div className="text-faint text-xs">Test coverage</div>
              </div>
              <div>
                <div className="text-link text-2xl font-bold font-mono">
                  2w → daily
                </div>
                <div className="text-faint text-xs">Release cadence</div>
              </div>
              <div>
                <div className="text-link text-2xl font-bold font-mono">
                  10k+
                </div>
                <div className="text-faint text-xs">
                  Prospects / job, unattended
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {["Node.js", "GCP", "AWS", "Architecture", "AI/LLM"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-foreground/80 ring-1 ring-inset ring-edge/50"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <span className="text-link text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read case study
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>

        {/* Recent Writing Section */}
        {latestBlog && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-foreground text-2xl font-bold">
                <span className="hidden brutal:inline-block bg-black text-white px-2 py-0.5 mr-3 text-base align-middle font-heading">
                  01
                </span>
                Latest Writing
              </h2>
              <Link
                href="/writing"
                className="text-link hover:text-link-hover text-sm font-medium inline-flex items-center gap-1 transition-colors"
              >
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <RecentWriting story={latestBlog} />
          </div>
        )}

        {/* GitHub Contribution Graph */}
        <ContributionGraph username="umairjibran" />
      </section>

      {/* Work Experience Section - Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-foreground text-2xl font-bold mb-12 text-center">
          <span className="hidden brutal:inline-block bg-black text-white px-2 py-0.5 mr-3 text-base align-middle font-heading">
            02
          </span>
          Work Experience
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 hidden md:block brutal:w-[3px] brutal:bg-black"></div>

          {/* Timeline items */}
          <div className="hidden md:block">
            {experience.map((exp, index) => (
              <ExperienceTimelineItem
                key={index}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* Mobile view - stacked */}
          <div className="md:hidden space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div
                  className="group bg-card border border-border rounded-lg p-6 hover:border-brand transition-all duration-300 cursor-pointer brutal:border-2 brutal:border-black brutal:shadow-hard brutal:hover:shadow-hard-lg brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:hover:border-black"
                  onClick={() => {
                    // Will need to handle mobile dialog
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden brutal:border-2 brutal:border-black">
                      {companyLogos[exp.company] ? (
                        <Image
                          src={companyLogos[exp.company]}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground font-semibold text-base mb-1 group-hover:text-link transition-colors">
                        {exp.position}
                      </h3>
                      <Link
                        href={exp.website}
                        target="_blank"
                        className="text-muted-foreground text-sm hover:text-link transition-colors inline-flex items-center gap-1 mb-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <p className="text-faint text-xs mb-3">
                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {exp.endDate
                          ? new Date(exp.endDate).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })
                          : "Present"}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {exp.oneLine}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <h2 className="text-foreground text-2xl font-bold">
            <span className="hidden brutal:inline-block bg-black text-white px-2 py-0.5 mr-3 text-base align-middle font-heading">
              03
            </span>
            What People Say
          </h2>
        </div>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Footer / Contact */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t border-border brutal:border-t-[3px] brutal:border-black">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-faint text-sm">
            Built with ❤️ by {profile.name.firstName} {profile.name.lastName}
          </div>
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary-hover text-primary-foreground brutal:border-2 brutal:border-black brutal:shadow-hard-sm brutal:hover:shadow-hard brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:font-bold brutal:uppercase"
            >
              <Link href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-edge text-foreground bg-transparent hover:bg-secondary hover:border-brand hover:text-foreground brutal:bg-card brutal:border-2 brutal:shadow-hard-sm brutal:hover:shadow-hard brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:font-bold brutal:uppercase brutal:hover:border-black"
            >
              <Link href={profile.consultationLink} target="_blank">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center text-faint/80 text-sm mt-8">
          Copyright © {profile.name.firstName} {new Date().getFullYear()}. All
          rights reserved.
        </div>
      </footer>
    </main>
  );
}
