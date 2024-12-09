import H1 from "@/components/H1";
import Page from "@/components/Page";
import Section from "@/components/Section";

export default function Logs() {
  return (
    <Page>
      <Section>
        <H1 url="/logs/#logs" subtitle="this is the logs">
          Logs
        </H1>
        <p>This is the logs page.</p>
      </Section>
    </Page>
  );
}
