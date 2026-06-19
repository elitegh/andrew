import { services } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import {
  Cloud,
  Database,
  Layers,
  Monitor,
  Server,
  ShieldCheck,
} from "lucide-react";

const icons = [Layers, Server, Monitor, Cloud, Database, ShieldCheck];

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-muted-bg/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="What I Do"
          title="Full-stack expertise across the entire software lifecycle."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:bg-card-hover hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
