const items = [
  { label: "Email", value: "jdeguz@hawaii.edu", href: "mailto:jdeguz@hawaii.edu" },
  {
    label: "Location",
    value: "91-3446 Maohiohi Loop, Ewa Beach, HI 96706",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <div className="rounded-2xl bg-navy px-6 py-10 text-background sm:px-10">
      <h3 className="font-serif text-2xl">Let&apos;s connect</h3>
      <p className="mt-2 max-w-md text-sm text-background/70">
        Open to accounting, tax, and advisory opportunities across Hawai&#8216;i
        and beyond.
      </p>
      <ul className="mt-6 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.label} className="flex gap-3">
            <span className="w-20 shrink-0 text-background/50">
              {item.label}
            </span>
            {item.href ? (
              <a href={item.href} className="underline underline-offset-4 hover:text-accent">
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
