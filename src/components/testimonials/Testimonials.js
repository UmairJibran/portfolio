import React from "react";
import "./Testimonials.css";

import TestimonialCard from "../testimonialCard/TestimonialCard";
import { testimonialsPageData } from "../../portfolio";

export default function Skills() {
  return (
    <div className="py-12 bg-white testimonial-body">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            TEST<span className="text-indigo-600">IMON</span>IALS
          </h3>
        </div>
        {testimonialsPageData.map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
      </div>
    </div>
  );
}
