import React from "react";
import "./Testimonials.css";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

import TestimonialCard from "../testimonialCard/TestimonialCard";
import { testimonialsPageData } from "../../portfolio";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Skills() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div class="py-12 bg-white">
      <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div class="text-center">
          <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            TEST<span class="text-indigo-600">IMON</span>IALS
          </h3>
        </div>
        <AutoPlaySwipeableViews
          axis={"x-reverse"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {" "}
          {testimonialsPageData.map((testimonial, index) => {
            return <TestimonialCard testimonial={testimonial} key={index} />;
          })}
          {testimonialsPageData.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <TestimonialCard testimonial={step} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </div>
  );
}
