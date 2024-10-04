"use client";

import Image from "next/image";

import Intro from "@/components/Intro";
import CallToAction from "@/components/CallToAction";

import "@/styles/greetings.scss";

import { image } from "@/data/profile.json";

export default function Greetings() {
  return (
    <div>
      <div
        id="greeting"
        className="flex flex-col-reverse w-full min-h-screen text-start items-center m-auto md:flex-row"
      >
        <Intro />
        <Image
          className="hero-image w-full ml-0 md:ml-10"
          alt="Cat Programmer"
          src={image}
          width={450}
          height={450}
        />
      </div>
      <div className="w-full mt-4 lg:mt-0">
        <CallToAction />
      </div>
    </div>
  );
}
