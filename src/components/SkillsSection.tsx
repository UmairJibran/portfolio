import { Wrench } from "lucide-react";
import skills from "@/data/skills.json";

export function SkillsSection() {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <Wrench className="h-5 w-5 text-green-400" />
        <h2 className="text-white text-2xl font-bold">Stack & Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5 hover:border-green-400/50 transition-colors"
          >
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-3 font-mono">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md bg-gray-800/60 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
