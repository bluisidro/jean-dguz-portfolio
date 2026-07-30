"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100dvh-65px)] max-w-5xl flex-col justify-center px-4 py-14 sm:px-8"
    >
      <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-3xl leading-tight text-accent-strong sm:text-4xl">
            Tax &amp; Advisory for Growing Businesses
          </p>
          <h1 className="mt-3 text-base font-semibold uppercase tracking-[0.2em] text-foreground/70 sm:text-lg">
            Jean Marinel De Guzman
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            Starting or scaling a business? I help owners get the tax and
            financial foundation right &mdash; entity structuring, federal
            and state compliance, and forward-looking advisory so you can
            build with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:jdeguz@hawaii.edu"
              className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start the conversation
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
        </div>
        <div className="flex shrink-0 items-center justify-center self-center rounded-full bg-accent/15 p-4 sm:self-auto sm:p-5">
          <Image
            src="/avatar.png"
            alt="Portrait of Jean Marinel De Guzman"
            width={176}
            height={176}
            priority
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="h-32 w-32 select-none rounded-full object-cover ring-4 ring-accent/30 sm:h-40 sm:w-40"
          />
        </div>
      </div>
    </section>
  );
}
