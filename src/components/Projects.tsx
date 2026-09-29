import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Featured Projects"
          title="High-impact work across full stack, AI/ML, and data."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 md:p-10 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <h3
                  className={`font-display font-bold text-foreground ${
                    i === 0 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {project.title}
                </h3>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-muted transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mb-6 text-base leading-relaxed text-muted md:text-lg">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm text-muted md:text-base"
                  >
                    <span className="font-mono text-accent">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
