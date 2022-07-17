import React from "react";

import {
  CarouselProvider,
  ButtonBack,
  ButtonNext,
  Slider,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

import "./Testimonials.css";

import TestimonialCard from "../testimonialCard/TestimonialCard";
import { testimonialsPageData } from "../../portfolio";

export default function Skills() {
  return (
    <div className="pb-2 pt-12 bg-white testimonial-body">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            TEST<span className="text-indigo-600">IMON</span>IALS
          </h3>
        </div>
        <div>
          <div className="2xl:container relative z-40">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={testimonialsPageData.length}
              isPlaying
              interval={15000}
              infinite
            >
              <Slider>
                {testimonialsPageData.map((testimonial, index) => (
                  <TestimonialCard
                    testimonial={testimonial}
                    key={index}
                    index={index}
                  />
                ))}
              </Slider>
              <div className="flex items-center mt-8">
                <ButtonBack
                  className="cursor-pointer "
                  role="button"
                  aria-label="previous slide"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                    alt="previous"
                  />
                </ButtonBack>

                <ButtonNext
                  role="button"
                  aria-label="next slide"
                  className="cursor-pointer ml-2"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                    alt="next"
                  />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
