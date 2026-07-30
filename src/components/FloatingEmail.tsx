export default function FloatingEmail() {
  return (
    <a
      href="mailto:jdeguz@hawaii.edu"
      aria-label="Send an email"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground/70 shadow-lg backdrop-blur transition-colors hover:border-accent hover:text-accent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0-.83.67-1.5 1.5-1.5h16.5c.83 0 1.5.67 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7l9 6 9-6"
        />
      </svg>
    </a>
  );
}
