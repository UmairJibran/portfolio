import integrations from "@/data/integrations.json";
import { SectionHeading, Em } from "@/components/SectionHeading";

export function IntegrationsSection() {
  return (
    <>
      <SectionHeading
        command="ls ./integrations"
        title={
          <>
            Things I&apos;ve <Em>wired up</Em>
          </>
        }
        description="Most of what I build has to talk to something else. These are the platforms and protocols I've connected in production — the niche and in-house ones are usually the same job with a different contract."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {integrations.map((group) => (
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
