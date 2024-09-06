import H1 from "@/components/H1";
import Section from "@/components/Section";

export default function More() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Section>
        <H1 url="/more/#more" subtitle="this is the more">
          More
        </H1>
        <p>This is the more page.</p>
      </Section>
    </main>
  );
}
