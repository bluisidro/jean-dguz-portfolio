import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
