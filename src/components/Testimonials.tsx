import { Carousel } from "antd";

import testimonials from "@/data/testimonials.json";
import TestimonialDetail from "./TestimonialsDetail";

export default function Testimonials() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">Testimonials</h1>
      <Carousel autoplay className="w-full md:w-3/4 m-auto font-mono">
        {testimonials.map((testimonial) => (
          <TestimonialDetail
            key={testimonial.email}
            testimonial={testimonial}
          />
        ))}
      </Carousel>
    </>
  );
}
