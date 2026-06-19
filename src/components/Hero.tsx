import { hero, personal } from "@/data/portfolio";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="hero-glow absolute inset-0" />
      <div className="grid-bg absolute inset-0 opacity-60" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <div className="animate-fade-up opacity-0">
          <p className="mb-6 font-mono text-sm font-medium uppercase tracking-[0.25em] text-accent">
            {personal.title} · {personal.yearsExperience} Years
          </p>
        </div>

        <h1 className="animate-fade-up animate-delay-100 opacity-0 font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.95] tracking-tighter text-foreground">
          {personal.name.split(" ")[0]}
          <br />
          <span className="gradient-text">{personal.name.split(" ")[1]}</span>
        </h1>

        <p className="animate-fade-up animate-delay-200 mt-8 max-w-4xl text-xl font-medium leading-relaxed text-muted md:text-2xl lg:text-3xl">
          {hero.headline}
        </p>

        <p className="animate-fade-up animate-delay-300 mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          {hero.description}
        </p>

        <div className="animate-fade-up animate-delay-400 mt-10 flex flex-wrap gap-3">
          {hero.primarySkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="animate-fade-up animate-delay-500 mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <span className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4" />
            {personal.location}
          </span>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-accent"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
