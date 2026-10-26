import hiring from "@/data/hiring.json";
import { SectionHeading, Em } from "@/components/SectionHeading";

/**
 * The plain answers to what people ask before getting in touch. Rendered as
 * visible copy on purpose: the FAQPage structured data on this page quotes
 * these exact questions and answers, and that markup is only legitimate while
 * the text is on the page too.
 */
export function WorkingTogether() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading
        command="man hiring"
        title={
          <>
            Working <Em>together</Em>
          </>
        }
        description={`The questions that usually come up first. ${hiring.availability}: ${hiring.roleTypes.join(" or ")}.`}
      />
      <dl className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
        {hiring.faq.map((entry) => (
          <div key={entry.question}>
            <dt className="mb-2 flex gap-2 text-sm font-medium text-foreground">
              <span className="shrink-0 font-mono text-brand" aria-hidden>
                ?
              </span>
              {entry.question}
            </dt>
            <dd className="pl-5 text-sm leading-relaxed text-muted-foreground">
              {entry.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
