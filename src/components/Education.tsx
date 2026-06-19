import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center md:p-16">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <GraduationCap className="h-8 w-8" />
          </div>
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Education
          </p>
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            {education.school}
          </h3>
          <p className="mt-2 text-lg text-muted">{education.degree}</p>
          <p className="mt-1 text-sm text-muted">{education.period}</p>
        </div>
      </div>
    </section>
  );
}
