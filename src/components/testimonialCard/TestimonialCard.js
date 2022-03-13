import React from "react";
import "./TestimonialCard.css";

export default function Skills(props) {
  const testimonial = props.testimonial;
  console.log(testimonial);
  return (
    <div class="flex flex-col items-start center">
      <div class="mb-4 bg-gray-100 p-5 text-gray-500">
        <p class="mt-2 text-sm leading-6 message-card">{testimonial.message}</p>
      </div>
      <div class="flex items-center">
        <a href="facebook.com">
          <img
            class="w-12 h-12 rounded-full mr-4"
            src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg"
            alt="Avatar"
          ></img>
        </a>
        <div class="text-sm">
          <a
            href={testimonial.nameLink}
            class="text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out font-medium leading-none"
          >
            {testimonial.name}
          </a>
          <p class="text-gray-600">
            {testimonial.designation} at
            <span class="text-indigo-600"> {testimonial.employerAtTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
