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
            className="group bg-white border-4 border-black p-6 hover:bg-brutalist-yellow transition-all duration-300 cursor-pointer brutalist-shadow"
            onClick={() => setShowDetails(true)}
          >
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-black flex items-center justify-center overflow-hidden">
                {companyLogos[experience.company] ? (
                  <Image
                    src={companyLogos[experience.company]}
                    alt={experience.company}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <Building2 className="w-6 h-6 text-black" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-black font-black text-base mb-1 uppercase">
                  <div className="flex items-center gap-2">
                    {experience.position}
                    {experience.volunteer && (
                      <span
                        className="inline-flex items-center justify-center px-2 py-0.5 bg-brutalist-blue text-white text-xs font-black border-2 border-black uppercase"
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
                  className="text-black text-sm hover:bg-black hover:text-brutalist-yellow transition-colors inline-flex items-center gap-1 mb-2 font-bold underline decoration-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.company}
                  <ExternalLink className="w-3 h-3" />
                </Link>
                <p className="text-black text-xs mb-3 font-bold uppercase">
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
                <p className="text-black text-sm leading-relaxed line-clamp-2 font-medium">
                  {experience.oneLine}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline dot and line */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-brutalist-red border-4 border-black z-10"></div>
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
          <div className="bg-white border-4 border-black p-5 h-[280px] flex flex-col">
            <Quote className="w-6 h-6 text-black mb-3 flex-shrink-0" />
            <p className="text-black text-xs leading-relaxed mb-4 line-clamp-4 flex-1 font-medium">
              {testimonials[getTestimonialIndex(-1)].testimonial}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonials[getTestimonialIndex(-1)].image}
                alt={testimonials[getTestimonialIndex(-1)].name}
                width={32}
                height={32}
                className="border-2 border-black"
              />
              <div className="flex-1 min-w-0">
                <div className="text-black font-black text-xs truncate uppercase">
                  {testimonials[getTestimonialIndex(-1)].name}
                </div>
                <div className="text-black text-xs truncate font-medium">
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
          <div className="bg-brutalist-yellow border-8 border-black p-8 brutalist-shadow-red">
            <Quote className="w-10 h-10 text-black mb-6" />
            <p className="text-black text-base leading-relaxed mb-8 font-bold">
              {testimonials[currentIndex].testimonial}
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={56}
                height={56}
                className="border-4 border-black"
              />
              <div className="flex-1">
                <div className="text-black font-black text-lg uppercase">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-black text-sm font-bold">
                  {testimonials[currentIndex].designationAtTime}
                </div>
                <div className="text-black text-xs mt-1 font-medium">
                  {testimonials[currentIndex].employerAtTime}
                </div>
              </div>
              {testimonials[currentIndex].linkedin && (
                <Link
                  href={testimonials[currentIndex].linkedin}
                  target="_blank"
                  className="text-black hover:bg-black hover:text-brutalist-yellow transition-colors p-2 border-2 border-black"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Next Testimonial (Right, smaller) */}
        <div className="hidden lg:block w-[300px] opacity-40 transform scale-90 transition-all duration-500">
          <div className="bg-white border-4 border-black p-5 h-[280px] flex flex-col">
            <Quote className="w-6 h-6 text-black mb-3 flex-shrink-0" />
            <p className="text-black text-xs leading-relaxed mb-4 line-clamp-4 flex-1 font-medium">
              {testimonials[getTestimonialIndex(1)].testimonial}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonials[getTestimonialIndex(1)].image}
                alt={testimonials[getTestimonialIndex(1)].name}
                width={32}
                height={32}
                className="border-2 border-black"
              />
              <div className="flex-1 min-w-0">
                <div className="text-black font-black text-xs truncate uppercase">
                  {testimonials[getTestimonialIndex(1)].name}
                </div>
                <div className="text-black text-xs truncate font-medium">
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
            className={`h-4 transition-all duration-300 border-2 border-black ${
              index === currentIndex
                ? "w-8 bg-black"
                : "w-4 bg-white hover:bg-gray-200"
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
        const res = await fetch('/api/blogs');
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
    return () => { mounted = false };
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section - Brutalist Theme */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Title */}
        <h1 className="text-black text-5xl md:text-7xl font-black mb-8 leading-none uppercase border-8 border-black p-8 bg-brutalist-yellow inline-block transform -rotate-1">
          Software engineer, technical
          <br />
          writer & open-source maintainer
        </h1>

        {/* Description */}
        <div
          className="text-black text-base md:text-lg leading-relaxed mb-8 max-w-3xl border-l-8 border-black pl-6 font-bold [&_a]:text-brutalist-red [&_a]:underline [&_a]:decoration-4 [&_a]:hover:bg-brutalist-red [&_a]:hover:text-white [&_strong]:text-black [&_strong]:font-black [&_img]:inline-block [&_img]:w-5 [&_img]:h-5 [&_img]:mx-1"
          dangerouslySetInnerHTML={{ __html: profile.extraInfo }}
        />

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          {profile.social.map((item, idx) => (
            <Link
              key={item.name}
              href={item.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-black border-4 border-black text-black hover:text-brutalist-yellow transition-colors text-sm font-bold uppercase brutalist-shadow transform hover:translate-x-1 hover:translate-y-1"
              target="_blank"
              style={{
                transform: `rotate(${idx % 2 === 0 ? '-' : ''}${Math.random() * 2}deg)`
              }}
            >
              {item.icon === "GitHub" && <Github className="h-5 w-5" />}
              {item.icon === "Linkedin" && <Linkedin className="h-5 w-5" />}
              {item.icon === "Twitter" && <Twitter className="h-5 w-5" />}
              {item.icon === "Mail" && <Mail className="h-5 w-5" />}
              {item.icon === "Type" && <Type className="h-5 w-5" />}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Recent Writing Section */}
        {latestBlog && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 border-b-4 border-black pb-4">
              <h2 className="text-black text-3xl font-black uppercase">Latest Writing</h2>
              <Link 
                href="/writing" 
                className="text-black hover:bg-brutalist-yellow hover:text-black text-sm font-bold uppercase inline-flex items-center gap-1 transition-colors border-4 border-black px-4 py-2"
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
          <h2 className="text-black text-2xl font-black mb-6 uppercase border-l-8 border-brutalist-yellow pl-4">
            Contribution Graph
          </h2>
          <div className="bg-white border-4 border-black p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-black text-sm font-bold uppercase">
                1038 contributions in the last year
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-black font-bold uppercase">Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-200 border-2 border-black"></div>
                  <div className="w-3 h-3 bg-brutalist-yellow border-2 border-black"></div>
                  <div className="w-3 h-3 bg-brutalist-red border-2 border-black"></div>
                  <div className="w-3 h-3 bg-black border-2 border-black"></div>
                </div>
                <span className="text-xs text-black font-bold uppercase">More</span>
              </div>
            </div>
            {/* Simplified contribution grid */}
            <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[3px] overflow-x-auto">
              {Array.from({ length: 371 }).map((_, i) => {
                const intensity = Math.random();
                const bgColor =
                  intensity > 0.75
                    ? "bg-black"
                    : intensity > 0.5
                      ? "bg-brutalist-red"
                      : intensity > 0.25
                        ? "bg-brutalist-yellow"
                        : intensity > 0.1
                          ? "bg-gray-200"
                          : "bg-white";
                return (
                  <div
                    key={i}
                    className={`w-[10px] h-[10px] border-2 border-black ${bgColor}`}
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
        <h2 className="text-black text-4xl font-black mb-12 text-center uppercase bg-brutalist-yellow border-8 border-black p-6 inline-block mx-auto block w-full text-center">
          Work Experience
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black transform -translate-x-1/2 hidden md:block"></div>

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
                  className="group bg-white border-4 border-black p-6 hover:bg-brutalist-yellow transition-all duration-300 cursor-pointer brutalist-shadow"
                  onClick={() => {
                    // Will need to handle mobile dialog
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-black flex items-center justify-center overflow-hidden">
                      {companyLogos[exp.company] ? (
                        <Image
                          src={companyLogos[exp.company]}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-black" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-black font-black text-base mb-1 uppercase">
                        {exp.position}
                      </h3>
                      <Link
                        href={exp.website}
                        target="_blank"
                        className="text-black text-sm hover:bg-black hover:text-brutalist-yellow transition-colors inline-flex items-center gap-1 mb-2 font-bold underline decoration-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <p className="text-black text-xs mb-3 font-bold uppercase">
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
                      <p className="text-black text-sm leading-relaxed line-clamp-2 font-medium">
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <h2 className="text-black text-4xl font-black uppercase border-b-8 border-black pb-4">What People Say</h2>
        </div>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Footer / Contact */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t-8 border-black">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-black text-sm font-bold uppercase">
            Built with ❤️ by {profile.name.firstName} {profile.name.lastName}
          </div>
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-brutalist-red hover:bg-black text-white hover:text-brutalist-red border-4 border-black font-bold uppercase px-6 py-3"
            >
              <Link href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              className="border-4 border-black text-black bg-white hover:bg-brutalist-yellow hover:text-black font-bold uppercase px-6 py-3"
            >
              <Link href={profile.consultationLink} target="_blank">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center text-black text-sm mt-8 font-bold uppercase">
          Copyright © {profile.name.firstName} {new Date().getFullYear()}. All
          rights reserved.
        </div>
      </footer>
    </main>
  );
}
