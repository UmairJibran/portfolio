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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceDialog } from "@/components/ExperienceDialog";
import { RecentWriting } from "@/components/RecentWriting";
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
            className="group bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-green-400 transition-all duration-300 cursor-pointer"
            onClick={() => setShowDetails(true)}
          >
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                {companyLogos[experience.company] ? (
                  <Image
                    src={companyLogos[experience.company]}
                    alt={experience.company}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <Building2 className="w-6 h-6 text-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-green-400 transition-colors">
                  <div className="flex items-center gap-2">
                    {experience.position}
                    {experience.volunteer && (
                      <span
                        className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-blue-900/30 border border-blue-700/50 text-blue-300 text-xs font-medium"
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
                  className="text-gray-400 text-sm hover:text-green-400 transition-colors inline-flex items-center gap-1 mb-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.company}
                  <ExternalLink className="w-3 h-3" />
                </Link>
                <p className="text-gray-500 text-xs mb-3">
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
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {experience.oneLine}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline dot and line */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-green-400 rounded-full border-4 border-[#0d0d0d] z-10"></div>
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
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5 h-[280px] flex flex-col">
            <Quote className="w-6 h-6 text-green-400 mb-3 flex-shrink-0" />
            <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-4 flex-1">
              {testimonials[getTestimonialIndex(-1)].testimonial}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonials[getTestimonialIndex(-1)].image}
                alt={testimonials[getTestimonialIndex(-1)].name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-xs truncate">
                  {testimonials[getTestimonialIndex(-1)].name}
                </div>
                <div className="text-gray-500 text-xs truncate">
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
          <div className="bg-[#1a1a1a] border-2 border-green-400 rounded-lg p-8 shadow-xl shadow-green-400/10">
            <Quote className="w-10 h-10 text-green-400 mb-6" />
            <p className="text-gray-200 text-base leading-relaxed mb-8">
              {testimonials[currentIndex].testimonial}
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="text-white font-bold text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentIndex].designationAtTime}
                </div>
                <div className="text-gray-500 text-xs mt-1">
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
                  className="text-gray-500 hover:text-green-400 transition-colors p-2"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Next Testimonial (Right, smaller) */}
        <div className="hidden lg:block w-[300px] opacity-40 transform scale-90 transition-all duration-500">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5 h-[280px] flex flex-col">
            <Quote className="w-6 h-6 text-green-400 mb-3 flex-shrink-0" />
            <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-4 flex-1">
              {testimonials[getTestimonialIndex(1)].testimonial}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonials[getTestimonialIndex(1)].image}
                alt={testimonials[getTestimonialIndex(1)].name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-xs truncate">
                  {testimonials[getTestimonialIndex(1)].name}
                </div>
                <div className="text-gray-500 text-xs truncate">
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
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-green-400"
                : "w-2 bg-gray-700 hover:bg-gray-600"
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
    <main className="bg-[#0d0d0d] min-h-screen grain">
      {/* Hero Section - Dark Theme */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Software engineer, technical
          <br />
          writer & open-source maintainer
        </h1>

        {/* Description */}
        <div
          className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-3xl [&_a]:text-green-400 [&_a]:hover:underline [&_strong]:text-white [&_strong]:font-medium [&_img]:inline-block [&_img]:w-5 [&_img]:h-5 [&_img]:mx-1"
          dangerouslySetInnerHTML={{ __html: profile.extraInfo }}
        />

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-16">
          {profile.social.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-md text-gray-300 hover:text-white transition-colors text-sm"
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

        {/* Recent Writing Section */}
        {latestBlog && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-bold">Latest Writing</h2>
              <Link
                href="/writing"
                className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
              >
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <RecentWriting story={latestBlog} />
          </div>
        )}

        {/* GitHub Contribution Graph Placeholder */}
        <div className="mb-16">
          <h2 className="text-white text-xl font-semibold mb-4">
            Contribution Graph
          </h2>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm">
                1038 contributions in the last year
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
                  <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
                  <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
                  <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
                </div>
                <span className="text-xs text-gray-500">More</span>
              </div>
            </div>
            {/* Simplified contribution grid */}
            <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[3px] overflow-x-auto">
              {Array.from({ length: 371 }).map((_, i) => {
                const intensity = Math.random();
                const bgColor =
                  intensity > 0.75
                    ? "bg-[#39d353]"
                    : intensity > 0.5
                      ? "bg-[#26a641]"
                      : intensity > 0.25
                        ? "bg-[#006d32]"
                        : intensity > 0.1
                          ? "bg-[#0e4429]"
                          : "bg-[#161b22]";
                return (
                  <div
                    key={i}
                    className={`w-[10px] h-[10px] rounded-sm ${bgColor}`}
                    title={`Contributions on day ${i + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section - Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-white text-2xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2 hidden md:block"></div>

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
                  className="group bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-green-400 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    // Will need to handle mobile dialog
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                      {companyLogos[exp.company] ? (
                        <Image
                          src={companyLogos[exp.company]}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-base mb-1 group-hover:text-green-400 transition-colors">
                        {exp.position}
                      </h3>
                      <Link
                        href={exp.website}
                        target="_blank"
                        className="text-gray-400 text-sm hover:text-green-400 transition-colors inline-flex items-center gap-1 mb-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <p className="text-gray-500 text-xs mb-3">
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
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
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
          <h2 className="text-white text-2xl font-bold">What People Say</h2>
        </div>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Footer / Contact */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-500 text-sm">
            Built with ❤️ by {profile.name.firstName} {profile.name.lastName}
          </div>
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-white bg-transparent hover:bg-gray-800 hover:border-green-400 hover:text-white"
            >
              <Link href={profile.consultationLink} target="_blank">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-8">
          Copyright © {profile.name.firstName} {new Date().getFullYear()}. All
          rights reserved.
        </div>
      </footer>
    </main>
  );
}
