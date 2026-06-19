import { impactStats } from "@/data/portfolio";

export function Impact() {
  return (
    <section className="border-t border-border bg-muted-bg/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-4 text-center font-mono text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Selected Impact
        </p>
        <h2 className="mb-16 text-center font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Numbers that matter.
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 md:p-10"
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium text-muted md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
