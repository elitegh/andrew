import { experience, personal } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-muted-bg/50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title={`${personal.yearsExperience} years building enterprise platforms.`}
        />
        <div className="relative space-y-12">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border md:block" />
          {experience.map((job) => (
            <div key={job.company} className="relative md:pl-16">
              <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-card md:flex">
                <Briefcase className="h-4 w-4 text-accent" />
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                        >
                          {job.company}
                          <ExternalLink className="h-4 w-4 shrink-0 opacity-60" />
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-accent">
                      {job.role}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted md:text-right">
                    {job.period}
                  </p>
                </div>
                <p className="mb-2 text-sm font-medium text-muted">
                  {job.industryFocus}
                </p>
                <p className="mb-6 text-base leading-relaxed text-muted md:text-lg">
                  {job.summary}
                </p>
                <ul className="space-y-3">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
