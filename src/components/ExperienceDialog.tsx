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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-8 border-black">
        <DialogHeader>
          <DialogTitle className="text-xl font-black flex flex-col gap-2 uppercase">
            <span className="text-black">{experience.position}</span>
            <Link 
              href={experience.website} 
              className="text-lg text-black hover:bg-brutalist-yellow font-black transition-colors underline decoration-4"
              target="_blank"
            >
              {experience.company}
            </Link>
            <span className="text-sm font-bold text-black uppercase">
              {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {
                experience.endDate ? new Date(experience.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Present'
              }
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-black mb-6 text-lg font-bold border-l-4 border-black pl-4">{experience.oneLine}</p>
          <ul className="space-y-3 text-black font-medium">
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-black mt-1.5 text-xl font-black">▪</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
} 