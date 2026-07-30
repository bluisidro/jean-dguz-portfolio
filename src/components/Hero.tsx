export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-8 sm:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
        Accounting &amp; Tax Professional
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        Jean Marinel De Guzman
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
        Detail-oriented accounting professional with strong knowledge of
        basic accounting principles, federal taxation, and financial
        reporting &mdash; pursuing CPA licensure and an MBA while
        contributing to corporate financial goals.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="/resume.pdf"
          download
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Download resume
        </a>
        <a
          href="mailto:jdeguz@hawaii.edu"
          className="text-sm font-medium text-accent-strong underline underline-offset-4"
        >
          jdeguz@hawaii.edu
        </a>
      </div>
      <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-foreground/60 sm:grid-cols-3">
        <div>
          <dt className="sr-only">Location</dt>
          <dd>91-3446 Maohiohi Loop, Ewa Beach, HI 96706</dd>
        </div>
        <div>
          <dt className="sr-only">Phone</dt>
          <dd>
            <a href="tel:+18083931594" className="hover:text-accent">
              (808) 393-1594
            </a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">GPA</dt>
          <dd>Cumulative GPA: 3.89 / 4.00</dd>
        </div>
      </dl>
    </section>
  );
}
