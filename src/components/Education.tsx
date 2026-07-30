export default function Education() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-serif text-lg text-foreground">
          University of Hawai&#8216;i &ndash; West O&#8216;ahu
        </h3>
        <span className="text-xs uppercase tracking-wide text-foreground/50">
          Graduated December 2024
        </span>
      </div>
      <p className="text-sm font-medium text-accent-strong">
        Bachelor of Arts in Business Administration, Concentration in
        Accounting
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/75">
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
          <span>Cumulative GPA: 3.89 / 4.00</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
          <span>Honors: Awarded With Distinction (Fall 2024)</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
          <span>Multiple Dean&#8217;s List Recognitions</span>
        </li>
      </ul>
    </div>
  );
}
