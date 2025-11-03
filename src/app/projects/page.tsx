"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Code2, Briefcase } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-6 w-6 text-black" />
              <span className="text-black text-sm uppercase tracking-wider font-black">Portfolio</span>
            </div>
            <h1 className="text-black text-6xl md:text-7xl font-black uppercase border-8 border-black p-6 bg-brutalist-yellow inline-block transform rotate-1">
              Projects
            </h1>
          </div>
          <div className="text-right">
            <div className="text-black text-sm mb-1 font-bold uppercase">Total</div>
            <div className="text-black text-3xl font-black font-mono border-4 border-black px-4 py-2 bg-brutalist-red text-white">
              {String(portfolio.length).padStart(2, '0')}
            </div>
          </div>
        </div>
        <div className="h-2 bg-black"></div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-0">
          {portfolio.map((project, index) => (
            <div
              key={project.id}
              className="group relative border-b-4 border-black last:border-b-0 hover:bg-brutalist-yellow transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-6 md:gap-8 py-6 px-4">
                {/* Index */}
                <div className="hidden md:block text-black font-black text-lg w-12 transition-colors uppercase">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Logo */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-white flex items-center justify-center overflow-hidden border-4 transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'border-black bg-brutalist-red' 
                      : 'border-black'
                  }`}>
                    <Image
                      src={`/assets/logos/${project.logo}.webp`}
                      alt={project.name}
                      width={60}
                      height={60}
                      className={`object-contain p-2 transition-transform duration-300 ${
                        hoveredIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/assets/logos/${project.logo}.png`;
                      }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-black font-black text-lg md:text-xl uppercase">
                      {project.name}
                    </h3>
                    {!project.url && !project.source && (
                      <span className="text-xs px-2 py-0.5 bg-black text-white border-2 border-black font-black uppercase">
                        Private
                      </span>
                    )}
                  </div>
                  <p className="text-black text-sm md:text-base line-clamp-1 md:line-clamp-2 font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 md:gap-3">
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="flex items-center gap-2 px-4 md:px-6 py-3 bg-black hover:bg-brutalist-yellow text-white hover:text-black transition-all text-sm font-black uppercase border-4 border-black brutalist-shadow"
                    >
                      <span className="hidden sm:inline">Visit</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  
                  {project.source && (
                    <Link
                      href={project.source}
                      target="_blank"
                      className="p-3 border-4 border-black hover:bg-black text-black hover:text-brutalist-yellow transition-all"
                      title="View Source Code"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer info */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="border-t-4 border-black pt-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-black font-bold uppercase">
            <Code2 className="h-4 w-4" />
            <span>Open source contributions and client work</span>
          </div>
          <Link 
            href="/" 
            className="text-black hover:bg-black hover:text-brutalist-yellow transition-colors flex items-center gap-1 border-4 border-black px-4 py-2 font-black uppercase"
          >
            Back to home
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}
