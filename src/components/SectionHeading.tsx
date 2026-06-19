export function SectionHeading({
  label,
  title,
  description,
  className = "",
}: {
  label: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
