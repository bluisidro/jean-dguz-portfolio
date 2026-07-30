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
              Let&apos;s discuss it
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
        </div>
        <div className="flex shrink-0 flex-col items-center gap-4 self-center sm:self-auto">
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-104 sm:w-104">
            <div
              className="absolute h-56 w-56 rotate-12 bg-accent/25 sm:h-80 sm:w-80"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <div
              className="absolute h-56 w-56 rotate-[-10deg] bg-accent/45 sm:h-80 sm:w-80"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <Image
              src="/avatar.png"
              alt="Portrait of Jean Marinel De Guzman"
              width={320}
              height={320}
              priority
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="relative h-48 w-48 select-none object-cover sm:h-64 sm:w-64"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
          </div>
          <dl className="text-sm">
            <div>
              <dt className="sr-only">GPA</dt>
              <dd className="font-medium text-accent-strong">
                Cumulative GPA: 3.89 / 4.00
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
