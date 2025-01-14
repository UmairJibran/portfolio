'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Type, Github, Linkedin, Mail, Twitter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ExperienceDialog } from "@/components/ExperienceDialog";
import profile from "@/data/profile.json";
import portfolio from "@/data/portfolio.json";
import experience from "@/data/experience.json";
import testimonials from "@/data/testimonials.json";

// Get featured projects (first 3)
const FEATURED_PROJECTS = portfolio.slice(0, 3).map(project => ({
  ...project,
  logo: `/assets/images/${project.logo}.png`,
  // Common tech stacks based on project descriptions
  tags: project.id === "waltzes" ? ["AI", "Next.js", "OpenAI"] :
        project.id === "puppydog-pb" ? ["Node.js", "React", "AWS"] :
        project.id === "meraid-pb" ? ["React Native", "Node.js", "MongoDB"] :
        ["Next.js", "Node.js", "AWS"]
}));

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

// Experience Card Component
function ExperienceCard({ experience }: { experience: Experience }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Card className="p-6 hover:shadow-lg transition-shadow group">
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{experience.position}</h3>
            <Link href={experience.website} className="text-blue-600 hover:text-blue-800 font-medium block mb-2" target="_blank">
              {experience.company}
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {
                experience.endDate ? new Date(experience.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Present'
              }
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="mt-4 w-full justify-between group-hover:text-blue-600"
            onClick={() => setShowDetails(true)}
          >
            View Details
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>

      <ExperienceDialog
        experience={experience}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
}

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  Hey there, {profile.name.firstName} here! 👋
                </h1>
                <p className="text-2xl font-light text-gray-300">{profile.subTitle}</p>
              </div>
              <div 
                className="text-lg text-gray-300 leading-relaxed space-y-4 [&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-300"
                dangerouslySetInnerHTML={{ __html: profile.extraInfo }}
              />
              <div className="flex items-center gap-4">
                <Button asChild variant="default" size="lg">
                  <Link href="/writing">Read My Blog</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={profile.consultationLink} target="_blank">Schedule a Call</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {profile.social.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.link} 
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    title={item.name}
                  >
                    {item.icon === "GitHub" && <Github className="h-6 w-6" />}
                    {item.icon === "Linkedin" && <Linkedin className="h-6 w-6" />}
                    {item.icon === "Twitter" && <Twitter className="h-6 w-6" />}
                    {item.icon === "Mail" && <Mail className="h-6 w-6" />}
                    {item.icon === "Type" && <Type className="h-6 w-6" />}
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 self-start sticky top-8">
              <Image
                src={profile.image}
                alt={`${profile.name.firstName} ${profile.name.lastName}`}
                width={400}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600">Some of the projects I'm most proud of</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-transparent hover:border-gray-200">
                <Link href={project.url || project.source || "#"} className="block p-6" target="_blank">
                  <div className="h-12 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={150}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-100">{tag}</Badge>
                    ))}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
            <p className="mt-4 text-lg text-gray-600">My journey in tech so far</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.filter(exp => !exp.volunteer).map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What People Say</h2>
            <p className="mt-4 text-lg text-gray-600">Feedback from clients and colleagues</p>
          </div>
          <TestimonialsCarousel testimonials={testimonials.map(t => ({
            ...t,
            twitter: t.twitter || undefined
          }))} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Got an idea in mind?</h2>
            <p className="mt-4 text-lg text-gray-600 mb-8">Let's connect and bring it to life</p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href={`mailto:${profile.email}`}>Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={profile.consultationLink} target="_blank">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 