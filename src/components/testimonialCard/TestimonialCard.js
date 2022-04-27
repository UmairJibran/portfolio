import React, { Component } from "react";
import "./TestimonialCard.css";

class TestimonialCard extends Component {
  render() {
    const testimonial = this.props.testimonial;
    return (
      <div className="flex flex-col items-start mb-4">
        <div className="mb-4 bg-gray-100 p-5 text-gray-500 message-card-box">
          <p className="mt-2 text-sm leading-6 message-card">
            {testimonial.message}
          </p>
        </div>
        <div className="flex items-center center">
          <a href={testimonial.nameLink}>
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={require(`../../assets/testimonials/${testimonial.avatarImagePath}`)}
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
            <div className="text-gray-600">
              {testimonial.designation} at
              <span className="text-indigo-600">
                {" "}
                {testimonial.employerAtTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialCard;
