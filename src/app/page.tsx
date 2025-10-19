'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Type, Github, Linkedin, Mail, Twitter, ChevronRight, ArrowRight, Sparkles, Code2, Rocket, Award } from "lucide-react";
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
      <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-blue-200">
              {experience.endDate ? 'Past' : 'Current'}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {experience.position}
          </h3>
          
          <Link 
            href={experience.website} 
            className="text-blue-600 hover:text-blue-700 font-semibold mb-3 flex items-center gap-2" 
            target="_blank"
          >
            {experience.company}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="text-sm text-gray-600 mb-4 font-medium">
            {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {
              experience.endDate ? new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'
            }
          </p>
          
          <Button 
            variant="ghost" 
            className="w-full justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50"
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
    <main className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">Available for new opportunities</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  <span className="block">Hi, I&apos;m</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {profile.name.firstName}
                  </span>
                </h1>
                
                <p className="text-2xl sm:text-3xl font-semibold text-blue-200">
                  {profile.subTitle}
                </p>
                
                <div 
                  className="text-lg text-gray-300 leading-relaxed max-w-2xl [&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-300 [&_strong]:text-white [&_strong]:font-semibold [&_img]:inline-block [&_img]:w-5 [&_img]:h-5 [&_img]:mx-1"
                  dangerouslySetInnerHTML={{ __html: profile.extraInfo }}
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8">
                  <Link href="/writing">
                    <Rocket className="mr-2 h-5 w-5" />
                    Read My Blog
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8">
                  <Link href={profile.consultationLink} target="_blank">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                {profile.social.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.link} 
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    title={item.name}
                  >
                    {item.icon === "GitHub" && <Github className="h-5 w-5" />}
                    {item.icon === "Linkedin" && <Linkedin className="h-5 w-5" />}
                    {item.icon === "Twitter" && <Twitter className="h-5 w-5" />}
                    {item.icon === "Mail" && <Mail className="h-5 w-5" />}
                    {item.icon === "Type" && <Type className="h-5 w-5" />}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:order-last order-first">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                
                {/* Image container */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-sm" />
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-2">
                    <Image
                      src={profile.image}
                      alt={`${profile.name.firstName} ${profile.name.lastName}`}
                      width={600}
                      height={600}
                      className="rounded-2xl w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Projects I&apos;m Proud Of
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of innovative solutions built with cutting-edge technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {FEATURED_PROJECTS.map((project, index) => (
              <Card 
                key={project.id} 
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Link href={project.url || project.source || "#"} className="block p-8 relative" target="_blank">
                  {/* Logo section */}
                  <div className="h-16 mb-6 flex items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={180}
                        height={64}
                        className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-900 border border-blue-100 hover:border-blue-300 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    View Project
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 text-lg px-8">
              <Link href="/projects">
                View All Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Rocket className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">Career Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building innovative solutions across multiple companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experience.filter(exp => !exp.volunteer).map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
              <Sparkles className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-900">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              What People Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Feedback from amazing clients and colleagues I&apos;ve worked with
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials.map(t => ({
            ...t,
            twitter: t.twitter || undefined
          }))} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Mail className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold">Let&apos;s Connect</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Got an Idea in Mind?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let&apos;s collaborate and turn your vision into reality
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10">
                <Link href={`mailto:${profile.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10">
                <Link href={profile.consultationLink} target="_blank">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 