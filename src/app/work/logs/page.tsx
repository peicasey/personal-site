import H1 from "@/components/H1";
import Section from "@/components/Section";

export default function Logs() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Section>
        <H1 url="/logs/#logs" subtitle="this is the logs">
          Logs
        </H1>
        <p>This is the logs page.</p>
      </Section>
    </main>
  );
}
