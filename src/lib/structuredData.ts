/**
 * schema.org nodes for the site, assembled from the same JSON the pages render
 * so the markup never drifts from what a visitor actually sees.
 *
 * Shape: the layout emits the site-wide identity (WebSite + Person) and each
 * page emits its own nodes, which point back at `#person` / `#website` by @id.
 * Keeping the Person node in the layout means that reference always resolves
 * inside the same document.
 */
import meta from "@/data/meta.json";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";
import skills from "@/data/skills.json";
import integrations from "@/data/integrations.json";
import hiring from "@/data/hiring.json";
import testimonials from "@/data/testimonials.json";
import portfolio from "@/data/portfolio.json";
import { WRITING_URL } from "@/lib/writing";
import type { ProjectItem } from "@/types/project";

export const SITE_URL = meta.metadataBase.replace(/\/$/, "");

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const FULL_NAME = `${profile.name.firstName} ${profile.name.lastName}`;

/** Current, non-volunteer role — drives `worksFor`. */
const currentRole = experience.find((e) => !e.endDate && !e.volunteer);

/** Everything the stack and integration sections list, de-duplicated. */
const expertise = Array.from(
  new Set([
    ...skills.flatMap((group) => group.items),
    ...integrations.flatMap((group) => group.items),
    "Backend architecture",
    "API design",
    "System integration",
    "Observability",
    "CI/CD",
    "Remote collaboration",
  ]),
);

function organization(name: string, url?: string | null) {
  return url
    ? { "@type": "Organization", name, url }
    : { "@type": "Organization", name };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: FULL_NAME,
    alternateName: meta.title.default,
    description: meta.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: FULL_NAME,
    givenName: profile.name.firstName,
    familyName: profile.name.lastName,
    url: `${SITE_URL}/`,
    mainEntityOfPage: { "@id": `${SITE_URL}/#profile` },
    image: `${SITE_URL}/icon.png`,
    jobTitle: hiring.titles,
    description:
      "Backend, DevOps, and AI/LLM engineer. Builds Node.js and Python services on AWS and GCP, agentic LLM workflows, and the CRM and automation integrations around them.",
    disambiguatingDescription:
      "Sole backend, DevOps, and AI/ML engineer at PuppyDog.io; open to full-time remote engineering roles and to relocating within Europe or North America.",
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: hiring.base.city,
      addressRegion: hiring.base.region,
      addressCountry: hiring.base.country,
    },
    homeLocation: {
      "@type": "Place",
      name: `${hiring.base.city}, Pakistan`,
      address: {
        "@type": "PostalAddress",
        addressLocality: hiring.base.city,
        addressCountry: hiring.base.country,
      },
    },
    knowsLanguage: [{ "@type": "Language", name: "English" }],
    sameAs: profile.social
      .filter((s) => s.icon !== "Mail")
      .map((s) => s.link)
      .concat(WRITING_URL),
    knowsAbout: expertise,
    worksFor: currentRole
      ? organization(currentRole.company, currentRole.website)
      : undefined,
    hasOccupation: {
      "@type": "Occupation",
      name: "Backend, DevOps & AI/LLM Engineer",
      occupationalCategory: "15-1252.00",
      description:
        "Designs and runs backend systems, cloud infrastructure, and LLM-powered workflows, including the CRM, automation, and messaging integrations that feed them.",
      skills: expertise.join(", "),
      occupationLocation: hiring.preferredRegions.map((region) => ({
        "@type": "AdministrativeArea",
        name: region,
      })),
    },
    seeks: {
      "@type": "Demand",
      name: `${hiring.availability}: ${hiring.roleTypes.join(" or ")}`,
      availability: "https://schema.org/InStock",
      areaServed: hiring.preferredRegions.map((region) => ({
        "@type": "AdministrativeArea",
        name: region,
      })),
      itemOffered: {
        "@type": "Service",
        name: "Backend, cloud, and AI/LLM engineering",
        serviceType: hiring.titles,
        provider: { "@id": PERSON_ID },
      },
    },
    /* Testimonials as quotations about the person: `review` is not a valid
       property of Person, `subjectOf` is. */
    subjectOf: testimonials.map((t) => ({
      "@type": "Quotation",
      text: t.testimonial,
      about: { "@id": PERSON_ID },
      creator: {
        "@type": "Person",
        name: t.name,
        jobTitle: t.designationAtTime,
        worksFor: organization(t.employerAtTime, t.employerSite),
        ...(t.linkedin
          ? { sameAs: `https://www.linkedin.com/in/${t.linkedin}` }
          : {}),
      },
    })),
  };
}

/** Roles, as a list a model can read in order without parsing the timeline. */
function workHistoryNode() {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#work-history`,
    name: `Work history — ${FULL_NAME}`,
    about: { "@id": PERSON_ID },
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: experience.length,
    itemListElement: experience.map((role, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EmployeeRole",
        roleName: role.position,
        startDate: role.startDate,
        ...(role.endDate ? { endDate: role.endDate } : {}),
        description: [role.oneLine, ...role.bullets].join(" "),
        ...(role.volunteer ? { additionalType: "VolunteerRole" } : {}),
        worksFor: organization(role.company, role.website),
      },
    })),
  };
}

/** Integration catalogue as a term set, so "does he integrate with X?" resolves. */
function integrationsNode() {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#integrations`,
    name: "Integrations built and shipped",
    description:
      "Third-party platforms, protocols, and automation tools Umair Jibran has integrated in production.",
    about: { "@id": PERSON_ID },
    numberOfItems: integrations.reduce(
      (total, group) => total + group.items.length,
      0,
    ),
    itemListElement: integrations.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "ListItem",
        name: item,
        item: {
          "@type": "DefinedTerm",
          name: item,
          inDefinedTermSet: group.category,
        },
      })),
    ),
  };
}

function faqNode() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#hiring-faq`,
    name: `Hiring ${FULL_NAME} — frequently asked questions`,
    about: { "@id": PERSON_ID },
    mainEntity: hiring.faq.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

/** Everything the home page claims, in one @graph. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: `${SITE_URL}/`,
        name: meta.title.default,
        description: meta.description,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        significantLink: [`${SITE_URL}/projects`, WRITING_URL],
      },
      workHistoryNode(),
      integrationsNode(),
      faqNode(),
    ],
  };
}

/** Projects page: the portfolio as a machine-readable collection. */
export function projectsGraph() {
  const projects = portfolio as ProjectItem[];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects#page`,
        url: `${SITE_URL}/projects`,
        name: "Projects",
        description:
          "Software Umair Jibran has built — product work, open-source tools, and non-profit projects — with the stack behind each one.",
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": `${SITE_URL}/projects#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/projects#list`,
        name: `Projects by ${FULL_NAME}`,
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": project.source ? "SoftwareSourceCode" : "CreativeWork",
            name: project.name,
            description: project.description,
            ...(project.url ? { url: project.url } : {}),
            ...(project.source ? { codeRepository: project.source } : {}),
            ...(project.tech?.length
              ? { keywords: project.tech.join(", ") }
              : {}),
            ...(project.caseStudies?.length
              ? {
                  subjectOf: project.caseStudies.map((study) => ({
                    "@type": "Article",
                    name: `${project.name} — ${study.label}`,
                    url: study.url,
                  })),
                }
              : {}),
            author: { "@id": PERSON_ID },
          },
        })),
      },
    ],
  };
}
