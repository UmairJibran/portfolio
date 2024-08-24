import Image from "next/image";
import Link from "next/link";

import { ExternalLink, Linkedin, Twitter, Mail } from "react-feather";

import type { ReactNode } from "react";
import { ITestimonial } from "@/types/testimonial";
import { launchExternalUrl } from "@/utils";

export default function TestimonialDetail({
  testimonial,
}: {
  testimonial: ITestimonial;
}) {
  const socials: ReactNode[] = [];

  if (testimonial.personalSite) {
    socials.push(
      <ExternalLink
        color="#64748b"
        className="cursor-pointer"
        onClick={() => launchExternalUrl(testimonial.personalSite)}
      />,
    );
  }

  if (testimonial.linkedin) {
    socials.push(
      <Linkedin
        color="#64748b"
        className="cursor-pointer"
        onClick={() =>
          launchExternalUrl(
            `https://www.linkedin.com/in/${testimonial.linkedin}`,
          )
        }
      />,
    );
  }

  if (testimonial.twitter) {
    socials.push(
      <Twitter
        color="#64748b"
        className="cursor-pointer"
        onClick={() =>
          launchExternalUrl(`https://twitter.com/${testimonial.twitter}`)
        }
      />,
    );
  }

  if (testimonial.email) {
    socials.push(
      <Mail
        color="#64748b"
        className="cursor-pointer"
        onClick={() => launchExternalUrl(`mailto:${testimonial.email}`)}
      />,
    );
  }

  return (
    <>
      <figure className="lg:flex rounded-xl p-8 lg:p-0 border">
        <Image
          className="w-24 h-24 lg:w-64 lg:h-auto lg:rounded-none rounded-full mx-auto object-cover filter-none lg:grayscale lg:hover:grayscale-0 "
          src={testimonial.image}
          alt={`${testimonial.name}'s Image`}
          width={600}
          height={600}
          objectFit="cover"
        />

        <div className="pt-6 lg:p-8 text-center lg:text-left space-y-4">
          <blockquote>
            <p className="text-sm md:text-lg font-medium font-inconsolata">
              “{testimonial.testimonial}”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 text-md md:text-xl">
              {testimonial.name}
            </div>
            <div className="text-slate-700 dark:text-slate-500 text-sm md:text-md">
              {testimonial.designationAtTime},{" "}
              <Link
                className="custom-underline"
                href={testimonial.employerSite}
                target="_blank"
              >
                {testimonial.employerAtTime}
              </Link>
            </div>
            <div className="flex flex-row gap-2 pt-2 justify-center lg:justify-start">
              {socials}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
