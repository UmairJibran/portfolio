"use client";

import profile from "@/data/profile.json";
import parse from "html-react-parser";
import { Sacramento } from "next/font/google";

import SocialStrip from "@/components/SocialStrip";
import CallToAction from "@/components/CallToAction";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

export default function Greetings() {
  return (
    <>
      <div id="intro" className="flex flex-col gap-4 mt-4 md:mt-0">
        <h1 className={`${sacramento.className} text-6xl`}>
          hey there, {profile.name.lastName.toLowerCase()} here!
        </h1>
        <p className="text-2xl font-black">{profile.subTitle}</p>
        <p className="font-inconsolata text-lg">{parse(profile.extraInfo)}</p>
        <SocialStrip />
        <div className="justify-center w-full flex ml-0: md:ml-28 gap-4">
          <CallToAction />
        </div>
      </div>
    </>
  );
}
