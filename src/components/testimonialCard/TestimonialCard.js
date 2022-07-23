import React from "react";
import { Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial, index }) => {
  const mailTo = `mailto:${testimonial.email}`;
  return (
    <Slide index={index} tabIndex="null">
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center testimonial-main">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block w-8 h-8 text-gray-400 mb-8"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
      </div>
      <div className="mx-auto sm:w-4/6 xl:w-1/2 lg:w-3/4 w-3/5">
        <div className="mx-auto text-center text-xs md:text-base">
          {testimonial.message}
        </div>
        <div className="mx-auto text-center">
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <p className="text-xs md:text-base">
            <a
              href={testimonial.nameLink}
              className="text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out font-medium leading-none"
            >
              {testimonial.name.toUpperCase()}
            </a>
            <br />
            <span className="text-gray-500">
              {testimonial.designation}
              {testimonial.employerAtTime ? (
                <>
                  {" "}
                  at
                  <span className="text-indigo-600">
                    {" "}
                    {testimonial.employerAtTime}
                  </span>
                </>
              ) : (
                <></>
              )}
            </span>
          </p>
          <span className="button-bar mx-auto text-center my-5 gap-10">
            {testimonial.email ? (
              <a href={mailTo} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            ) : (
              <></>
            )}
            {testimonial.linkedin ? (
              <a href={testimonial.linkedin} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-linkedin"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                  <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                  <line x1="8" y1="11" x2="8" y2="16" />{" "}
                  <line x1="8" y1="8" x2="8" y2="8.01" />{" "}
                  <line x1="12" y1="16" x2="12" y2="11" />{" "}
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />{" "}
                </svg>
              </a>
            ) : (
              <></>
            )}
            {testimonial.website ? (
              <a href={testimonial.website} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <></>
            )}
          </span>
        </div>
      </div>
    </Slide>
  );
};

export default TestimonialCard;
