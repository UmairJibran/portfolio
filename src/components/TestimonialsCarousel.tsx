'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Testimonial = {
  name: string;
  designationAtTime: string;
  employerAtTime: string;
  linkedin?: string;
  twitter?: string;
  testimonial: string;
  image: string;
};

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning || isPaused) return;
    setIsTransitioning(true);
    // Wait for fade out
    setTimeout(() => {
      setCurrentIndex(newIndex);
      // Wait a bit before starting fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  }, [isTransitioning, isPaused]);

  const nextTestimonial = useCallback(() => {
    if (isPaused) return;
    changeSlide((currentIndex + 1) % testimonials.length);
  }, [currentIndex, testimonials.length, changeSlide, isPaused]);

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex justify-center items-center min-h-[400px]">
        {/* Testimonials */}
        <div className="flex justify-center items-center gap-4 w-full">
          {/* Previous Testimonial (Partially Visible) */}
          <div className="hidden md:block w-64 opacity-30 transform scale-90">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={testimonials[getTestimonialIndex(-1)].image}
                  alt={testimonials[getTestimonialIndex(-1)].name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="truncate">
                  <div className="font-semibold text-sm truncate">
                    {testimonials[getTestimonialIndex(-1)].name}
                  </div>
                  <div className="text-xs text-gray-600 truncate">
                    {testimonials[getTestimonialIndex(-1)].designationAtTime}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Current Testimonial */}
          <div className="w-full max-w-2xl">
            <Card 
              className={`p-8 transition-all duration-300 ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentIndex].designationAtTime} at {testimonials[currentIndex].employerAtTime}
                  </div>
                </div>
              </div>
              <blockquote className="mb-6 min-h-[120px]">
                <p className="text-gray-700 leading-relaxed">"{testimonials[currentIndex].testimonial}"</p>
              </blockquote>
              <div className="flex items-center gap-3">
                {testimonials[currentIndex].linkedin && (
                  <Link 
                    href={`https://linkedin.com/in/${testimonials[currentIndex].linkedin}`}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                )}
                {testimonials[currentIndex].twitter && (
                  <Link 
                    href={`https://twitter.com/${testimonials[currentIndex].twitter}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    target="_blank"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </Card>
          </div>

          {/* Next Testimonial (Partially Visible) */}
          <div className="hidden md:block w-64 opacity-30 transform scale-90">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={testimonials[getTestimonialIndex(1)].image}
                  alt={testimonials[getTestimonialIndex(1)].name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="truncate">
                  <div className="font-semibold text-sm truncate">
                    {testimonials[getTestimonialIndex(1)].name}
                  </div>
                  <div className="text-xs text-gray-600 truncate">
                    {testimonials[getTestimonialIndex(1)].designationAtTime}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}