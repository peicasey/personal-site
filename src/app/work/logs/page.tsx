import H1 from "@/components/H1";
import LogCard from "@/components/LogCard";
import Page from "@/components/Page";
import Section from "@/components/Section";
import { LOG_INFO } from "@/lib/logs";

export default function Logs() {
  // let log_info: LogInfo[] = [];
  // log_info = log_info.concat(Object.values(LOGS));
  // console.log(log_info);

  return (
    <Page>
      <Section>
        <H1 url="/logs/#logs" subtitle="this is the logs">
          Logs
        </H1>
        <div className="w-full flex flex-col gap-4">
          {LOG_INFO.map((log, i) => (
            <LogCard {...log} key={i} />
          ))}
        </div>
      </Section>
    </Page>
  );
}
