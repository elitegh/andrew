import { personal } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's build something scalable."
          description="I am open to senior software engineering opportunities focused on .NET, React, Azure, full-stack development, backend engineering, cloud modernization, and scalable enterprise platforms."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${personal.email}`}
            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10"
          >
            <Mail className="mb-4 h-8 w-8 text-accent" />
            <p className="mb-1 text-sm font-medium text-muted">Email</p>
            <p className="text-sm font-semibold text-foreground group-hover:text-accent">
              {personal.email}
            </p>
          </a>
          <a
            href={`tel:${personal.phone.replace(/[^0-9]/g, "")}`}
            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10"
          >
            <Phone className="mb-4 h-8 w-8 text-accent" />
            <p className="mb-1 text-sm font-medium text-muted">Phone</p>
            <p className="text-sm font-semibold text-foreground group-hover:text-accent">
              {personal.phone}
            </p>
          </a>
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
            <MapPin className="mb-4 h-8 w-8 text-accent" />
            <p className="mb-1 text-sm font-medium text-muted">Location</p>
            <p className="text-sm font-semibold text-foreground">
              {personal.location}
            </p>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10"
          >
            <GithubIcon className="mb-4 h-8 w-8 text-accent" />
            <p className="mb-1 text-sm font-medium text-muted">GitHub</p>
            <p className="text-sm font-semibold text-foreground group-hover:text-accent">
              @adrewfrenenski
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
