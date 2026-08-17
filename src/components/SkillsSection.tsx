import { Wrench } from "lucide-react";
import skills from "@/data/skills.json";

export function SkillsSection() {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <Wrench className="h-5 w-5 text-link" />
        <h2 className="text-foreground text-2xl font-bold">Stack & Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-card border border-border rounded-lg p-5 hover:border-brand/50 transition-colors brutal-card"
          >
            <div className="text-faint text-xs uppercase tracking-wider mb-3 font-mono brutal:w-fit brutal:bg-brand brutal:text-foreground brutal:px-1 brutal:font-bold">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-foreground/80 ring-1 ring-inset ring-edge/50 brutal:border-2 brutal:border-edge brutal:bg-card brutal:font-bold brutal:shadow-hard-sm brutal:ring-0"
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
