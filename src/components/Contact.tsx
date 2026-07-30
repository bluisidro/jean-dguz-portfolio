export default function Contact() {
  return (
    <div className="rounded-2xl bg-navy px-6 py-10 text-background sm:px-10">
      <h3 className="font-serif text-2xl">Let&apos;s connect</h3>
      <p className="mt-2 max-w-md text-sm text-background/70">
        Open to accounting, tax, and advisory opportunities across Hawai&#8216;i
        and beyond.
      </p>
      <a
        href="mailto:jdeguz@hawaii.edu"
        className="mt-6 inline-block rounded-full bg-background px-5 py-2.5 text-sm font-medium text-navy transition-opacity hover:opacity-90"
      >
        Send an email
      </a>
    </div>
  );
}
