import H1 from "@/components/H1";
import Page from "@/components/Page";
import Section from "@/components/Section";

export default function Projects() {
  return (
    <Page>
      <Section>
        <H1
          url="/projects/#projects"
          subtitle="this is the projects, very long longlgong"
        >
          Projects
        </H1>
        <p>This is the projects page.</p>
        <div className="min-w-0 w-fit max-w-[250px] overflow-hidden text-ellipsis">
          <span className="truncate">
            asdfalsdkfj dfskf lajdsflkajsdd kljadslfjasdfk jkasjfksd
            fjkadfkajsdf dfd
          </span>
        </div>
      </Section>
    </Page>
  );
}
