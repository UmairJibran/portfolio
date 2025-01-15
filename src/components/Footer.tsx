"use client";

import { Button } from "@/components/ui/button";
import { launchExternalUrl } from "@/utils";
import profile from "@/data/profile.json";
import { Mail } from "react-feather";

export default function Footer() {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Got an idea in mind?</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600">Let&apos;s connect</h2>
        <Button
          onClick={() => launchExternalUrl(`mailto:${profile.email}`)}
          size="lg"
          className="mt-4"
        >
          <Mail className="mr-2 h-4 w-4" />
          Get in touch
        </Button>
      </div>
    </div>
  );
}
