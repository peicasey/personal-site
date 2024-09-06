import H1 from "@/components/H1";
import Section from "@/components/Section";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Section>
        <H1 url="/about/#about" subtitle="this is the about">
          About
        </H1>
        <p>This is the about page.</p>
      </Section>
    </main>
  );
}
