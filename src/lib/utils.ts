import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function readingTimeMinutes(markdown: string): number {
  const text = markdown.replace(/```[\s\S]*?```/g, " ").replace(/[#>*_\-`]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
