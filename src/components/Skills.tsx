const groups = [
  {
    label: "Accounting & Finance",
    items: [
      "Financial Accounting",
      "Managerial Accounting",
      "Financial Statement Analysis",
      "Financial Planning",
      "Auditing",
      "Corporate & Partnership Tax",
      "Individual Income Tax",
      "Estate & Gift Taxation",
    ],
  },
  {
    label: "Technical & Software",
    items: ["Microsoft Office Applications", "Digital Tools for Information Systems"],
  },
  {
    label: "Soft Skills",
    items: [
      "Problem Solving",
      "Analytical Reasoning",
      "Multi-cultural Awareness",
      "Independent & Team Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            {group.label}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-sm text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
