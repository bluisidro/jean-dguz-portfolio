import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-8 sm:pt-20">
      <div className="flex items-center gap-5">
        <Image
          src="/avatar.png"
          alt="Portrait of Jean Marinel De Guzman"
          width={72}
          height={72}
          priority
          className="h-16 w-16 rounded-full object-cover shadow-sm ring-1 ring-border ring-offset-4 ring-offset-background saturate-[0.85] sm:h-[72px] sm:w-[72px]"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
            Accounting &amp; Tax Professional
          </p>
          <h1 className="mt-1 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Jean Marinel De Guzman
          </h1>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
        Detail-oriented accounting professional with strong knowledge of
        basic accounting principles, federal taxation, and financial
        reporting &mdash; pursuing CPA licensure and an MBA while
        contributing to corporate financial goals.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="mailto:jdeguz@hawaii.edu"
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          View resume
        </a>
      </div>
      <dl className="mt-10 text-sm text-foreground/60">
        <div>
          <dt className="sr-only">GPA</dt>
          <dd>Cumulative GPA: 3.89 / 4.00</dd>
        </div>
      </dl>
    </section>
  );
}
