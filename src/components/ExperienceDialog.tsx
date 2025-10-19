'use client';

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Experience = {
  company: string;
  website: string;
  position: string;
  startDate: string;
  endDate: string | null;
  oneLine: string;
  bullets: string[];
  volunteer: boolean;
};

export function ExperienceDialog({
  experience,
  open,
  onOpenChange,
}: {
  experience: Experience;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex flex-col gap-2">
            <span className="text-white">{experience.position}</span>
            <Link 
              href={experience.website} 
              className="text-lg text-green-400 hover:text-green-300 font-medium transition-colors"
              target="_blank"
            >
              {experience.company}
            </Link>
            <span className="text-sm font-normal text-gray-400">
              {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {
                experience.endDate ? new Date(experience.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Present'
              }
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-gray-300 mb-6 text-lg">{experience.oneLine}</p>
          <ul className="space-y-3 text-gray-400">
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-1.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
} 