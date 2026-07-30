const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-8">
        <a
          href="#top"
          className="font-serif text-lg tracking-wide text-foreground"
        >
          Jean Marinel De Guzman
        </a>
        <ul className="hidden gap-8 text-sm text-foreground/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm text-accent-strong underline underline-offset-4 sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
