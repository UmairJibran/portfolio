"use client";

import experiences from "@/data/experience.json";
import { Heart, Briefcase } from "react-feather";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceDialog } from "@/components/ExperienceDialog";
import { useState } from "react";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div
      id="experience"
      className="flex flex-col w-full min-h-screen justify-center items-center py-12"
    >
      {/* Mobile View */}
      <div className="w-full space-y-4 md:hidden">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            onClick={() => {
              setSelectedExperience(experience);
              setDialogOpen(true);
            }}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {experience.volunteer ? (
                <Heart size={16} className="text-red-500" />
              ) : (
                <Briefcase size={16} className="text-blue-500" />
              )}
              <h2 className="font-mono font-medium">{experience.company.toUpperCase()}</h2>
            </div>
            <p className="text-sm text-gray-600 mt-2">{experience.position}</p>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <Tabs
        defaultValue={experiences[0].company}
        className="hidden md:flex w-full max-w-4xl"
        orientation="vertical"
      >
        <TabsList className="w-[200px] h-auto flex-col bg-gray-50/50 rounded-lg p-2">
          {experiences.map((experience) => (
            <TabsTrigger
              key={experience.company}
              value={experience.company}
              className="w-full justify-start gap-2 p-3"
              onClick={() => setSelectedExperience(experience)}
            >
              {experience.volunteer ? (
                <Heart size={14} className="text-red-500" />
              ) : (
                <Briefcase size={14} className="text-blue-500" />
              )}
              <span className="font-mono">{experience.company.toUpperCase()}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {experiences.map((experience) => (
          <TabsContent
            key={experience.company}
            value={experience.company}
            className="flex-1 ml-6 mt-0"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{experience.position}</h3>
              <p className="text-gray-600">{experience.oneLine}</p>
              <ul className="space-y-3">
                {experience.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1.5">•</span>
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <ExperienceDialog
        experience={selectedExperience}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
