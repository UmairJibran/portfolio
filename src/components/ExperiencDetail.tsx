"use client";

import { formatDate } from "@/utils";
import { IExperienceDetail } from "@/types/experience";

export default function ExperienceDetail({
  experience,
}: {
  experience: IExperienceDetail;
}) {
  return (
    <>
      <div id="experience-detail" className="w-full h-full font-mono">
        <h3 className="italic mb-4">
          {formatDate({ date: experience.startDate, format: "SHORT" })} -{" "}
          {formatDate({ date: experience.endDate, format: "SHORT" }) ??
            "Present"}
        </h3>
        <h2 className="mb-2 font-bold">
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
