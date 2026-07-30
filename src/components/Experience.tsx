const roles = [
  {
    company: "Roanne Matsuura CPA, Inc.",
    title: "Associate, Tax and Advisory",
    period: "January 2025 – Present",
    bullets: [
      "Prepare comprehensive federal and state tax returns for individual, corporate, and partnership clients, maintaining strict compliance with evolving IRC standards and local tax laws.",
      "Conduct technical tax research on complex provisions, deduction strategies, and tax credits to optimize client tax positions and reduce liabilities.",
      "Analyze client financial statements, general ledgers, and supporting documentation to ensure accuracy prior to tax preparation and reporting.",
      "Collaborate directly with senior management and clients to deliver strategic tax planning and ongoing financial advisory services.",
    ],
  },
  {
    company: "KMH, LLP",
    title: "Tax Intern",
    period: "June 2024 – October 2024",
    bullets: [
      "Assisted senior tax associates in preparing complex tax provision calculations, working papers, and client tax filings across various business structures.",
      "Performed detailed review and audit-readiness evaluations on client source documents, schedules, and historical tax records to identify variances.",
      "Utilized tax code regulations and accounting research tools to address specialized technical queries surrounding gift, estate, and corporate taxation.",
      "Supported client engagement teams during peak tax filing deadlines, ensuring accurate and timely submission of state and federal forms.",
    ],
  },
];

export default function Experience() {
  return (
    <ol className="space-y-10 border-l border-border pl-6">
      {roles.map((role) => (
        <li key={role.company} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-lg text-foreground">
              {role.title}
            </h3>
            <span className="text-xs uppercase tracking-wide text-foreground/50">
              {role.period}
            </span>
          </div>
          <p className="text-sm font-medium text-accent-strong">
            {role.company}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/75">
            {role.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
