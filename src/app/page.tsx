import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <Section id="about" eyebrow="Summary" title="Professional Summary">
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            Detail-oriented and driven accounting professional with strong
            knowledge of basic accounting principles, federal taxation, and
            financial reporting. Proven ability to work independently and
            collaboratively within accounting teams. Eager to leverage strong
            academic credentials (GPA: 3.89) and hands-on tax experience to
            contribute to corporate financial goals while pursuing
            professional CPA licensure and an MBA.
          </p>
        </Section>

        <Section id="experience" eyebrow="Career" title="Professional Experience">
          <Experience />
        </Section>

        <Section id="education" eyebrow="Academics" title="Education">
          <Education />
        </Section>

        <Section id="skills" eyebrow="Expertise" title="Core Competencies & Skills">
          <Skills />
        </Section>

        <Section id="contact" eyebrow="Reach out" title="Contact">
          <Contact />
        </Section>
      </main>
      <footer className="mx-auto w-full max-w-5xl px-4 py-8 text-center text-xs text-foreground/40 sm:px-8">
        &copy; {new Date().getFullYear()} Jean Marinel De Guzman. All rights reserved.
      </footer>
    </>
  );
}
