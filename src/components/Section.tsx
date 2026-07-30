"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-5xl scroll-mt-20 px-4 py-14 transition-all duration-700 ease-out sm:px-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
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
