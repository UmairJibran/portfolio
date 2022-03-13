import React from "react";
import "./TestimonialCard.css";

export default function Skills(props) {
  const testimonial = props.testimonial;
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4 bg-gray-100 p-5 text-gray-500 message-card-box">
        <p className="mt-2 text-sm leading-6 message-card">
          {testimonial.message}
        </p>
      </div>
      <div className="flex items-center center">
        <a href={testimonial.nameLink}>
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={require(`../../assests/testimonials/${testimonial.avatarImagePath}`)}
            alt="Avatar"
          ></img>
        </a>
        <div className="text-sm">
          <a
            href={testimonial.nameLink}
            className="text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out font-medium leading-none"
          >
            {testimonial.name}
          </a>
          <p className="text-gray-600">
            {testimonial.designation} at
            <span className="text-indigo-600">
              {" "}
              {testimonial.employerAtTime}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
