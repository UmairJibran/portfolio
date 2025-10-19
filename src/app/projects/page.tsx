"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Code2, Briefcase } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#0d0d0d] min-h-screen grain">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-6 w-6 text-green-400" />
              <span className="text-gray-500 text-sm uppercase tracking-wider">Portfolio</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-bold">
              Projects
            </h1>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-sm mb-1">Total</div>
            <div className="text-green-400 text-2xl font-bold font-mono">
              {String(portfolio.length).padStart(2, '0')}
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-green-400 via-gray-800 to-transparent"></div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-0">
          {portfolio.map((project, index) => (
            <div
              key={project.id}
              className="group relative border-b border-gray-800 last:border-b-0 hover:bg-[#1a1a1a]/30 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-6 md:gap-8 py-6 px-4">
                {/* Index */}
                <div className="hidden md:block text-gray-600 group-hover:text-green-400 font-mono text-sm w-12 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Logo */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden border transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'border-green-400 shadow-lg shadow-green-400/20' 
                      : 'border-gray-800'
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
                  {/* Decorative corner accent */}
                  {hoveredIndex === index && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold text-lg md:text-xl group-hover:text-green-400 transition-colors">
                      {project.name}
                    </h3>
                    {!project.url && !project.source && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500 border border-gray-700">
                        Private
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base line-clamp-1 md:line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 md:gap-3">
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-all text-sm font-medium shadow-lg shadow-green-600/20 hover:shadow-green-600/40"
                    >
                      <span className="hidden sm:inline">Visit</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  
                  {project.source && (
                    <Link
                      href={project.source}
                      target="_blank"
                      className="p-2 border border-gray-700 hover:border-green-400 hover:bg-green-400/10 text-gray-400 hover:text-green-400 rounded-md transition-all"
                      title="View Source Code"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Animated hover gradient line */}
              <div 
                className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-green-400 via-green-400/50 to-transparent transition-all duration-500 ${
                  hoveredIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer info */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="border-t border-gray-800 pt-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Code2 className="h-4 w-4" />
            <span>Open source contributions and client work</span>
          </div>
          <Link 
            href="/" 
            className="text-gray-500 hover:text-green-400 transition-colors flex items-center gap-1"
          >
            Back to home
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}
