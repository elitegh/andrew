import { about } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Full stack, AI/ML, and data — from architecture to production."
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed text-muted md:text-xl ${
                i === 0 ? "lg:text-2xl lg:leading-relaxed lg:text-foreground" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
