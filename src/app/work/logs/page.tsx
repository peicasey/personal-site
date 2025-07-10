import H1 from "@/components/H1";
import LogCard from "@/components/LogCard";
import Page from "@/components/Page";
import Section from "@/components/Section";
import { LOGS } from "@/lib/logs";

export default function Logs() {
  return (
    <Page>
      <Section>
        <H1 url="/logs/#logs" subtitle="this is the logs">
          Logs
        </H1>
        <div className="w-full flex flex-col gap-4">
          {LOGS.map((log, i) => (
            <LogCard {...log} key={i} />
          ))}
        </div>
      </Section>
    </Page>
  );
}
