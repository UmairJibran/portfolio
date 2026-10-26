import skills from "@/data/skills.json";
import { SectionHeading, Em } from "@/components/SectionHeading";

export function SkillsSection() {
  return (
    <>
      <SectionHeading
        command="cat ./stack.json"
        title={
          <>
            The <Em>stack</Em>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="panel panel-hover p-5">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-brand">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
