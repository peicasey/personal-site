import H1 from "@/components/H1";
import LandingBox from "@/components/LandingBox";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingBox />
      <Section>
        <H1 url="/#featured" subtitle="actually decent content">
          Featured
        </H1>
        <p>Featured :3</p>
      </Section>
    </main>
  );
}
