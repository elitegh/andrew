import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row lg:px-8">
        <p>
          © {year} {personal.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
