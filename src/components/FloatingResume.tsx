export default function FloatingResume() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View resume"
      className="fixed bottom-20 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground/70 shadow-lg backdrop-blur transition-colors hover:border-accent hover:text-accent"
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
          d="M14.25 2.25H6.75a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V8.25L14.25 2.25z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 2.25V8.25H20.25M9 13.5h6M9 17h6"
        />
      </svg>
    </a>
  );
}
