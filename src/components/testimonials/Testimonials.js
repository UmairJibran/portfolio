import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Testimonials.css";

import TestimonialCard from "../testimonialCard/TestimonialCard";
import { testimonialsPageData } from "../../portfolio";

// const BtNext = (_props) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-6 w-6"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//     </svg>
//   );
// };

// const BtnPrev = (_props) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       <path
//         fillRule="evenodd"
//         d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// };

export default function Testimonials({ theme }) {
  return (
    <>
      <div className="py-10 testimonial-body" id="testimonials">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <h3 className="text-lg sm:text-5xl leading-normal tracking-tight text-gray-900 mb-10 text-center">
            <span className="text-3xl" style={{ color: theme.text }}>
              REF<span className="text-3xl text-indigo-600">EREN</span>CES
            </span>
          </h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Slider
              style={{ width: "100vw" }}
              dots={true}
              // infinite
              speed={1500}
              autoplay={true}
              arrows={false}
              fade={true}
              lazyLoad="anticipated"
              autoplaySpeed={5000}
              pauseOnHover={true}
              // prevArrow=<BtnPrev />
              // nextArrow=<BtNext />
            >
              {testimonialsPageData.map((testimonial, index) => (
                <TestimonialCard
                  testimonial={testimonial}
                  key={index}
                  index={index}
                  theme={theme}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
