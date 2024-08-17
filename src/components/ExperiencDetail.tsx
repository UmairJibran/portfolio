"use client";

import { Plus } from "react-feather";

import { formatDate } from "@/utils";

export interface ExperienceDetail {
  company: string;
  website: string;
  position: string;
  startDate: string;
  endDate: string | null;
  oneLine: string;
  bullets: string[];
  volunteer: boolean;
}

export default function ExperienceDetail({
  experience,
}: {
  experience: ExperienceDetail;
}) {
  return (
    <>
      <div id="experience-detail" className="w-full h-full font-mono">
        <h3 className="italic mb-4">
          {formatDate({ date: experience.startDate, format: "SHORT" })} -{" "}
          {formatDate({ date: experience.endDate, format: "SHORT" }) ??
            "Present"}
        </h3>
        <h2 className="mb-2">
          {experience.position} @ {experience.company}
        </h2>
        <h4 className="mb-1">{experience.oneLine}</h4>
        {experience.bullets.map((bullet, index) => (
          <div key={index} className="flex my-1">
            <p className="mb-2">+ {bullet}</p>
          </div>
        ))}
      </div>
    </>
  );
}
