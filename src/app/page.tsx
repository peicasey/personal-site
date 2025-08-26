import LandingBox from "@/app/_sections/LandingBox";
import FeaturedSection from "./_sections/FeaturedSection";
import { LogInfo } from "@/lib/logs";
import BentoLayout from "@/components/BentoLayout";
import AdventureSection from "@/components/more/adventures/AdventureSection";
import Section from "@/components/Section";
import Card from "@/components/Card";
import H1 from "@/components/H1";
import FowardButton from "@/components/arrow-buttons/ForwardButton";
import { YEARLY_ADVENTURES } from "@/lib/adventures";

const FEATURED_LOG: LogInfo = {
  title: "How I Became the Richest Man Alive",
  topicTags: [
    { text: "wealth", color: "#959c2e" },
    { text: "grindset", color: "#d4e212" },
    { text: "alpha", color: "#ffaa20" },
  ],
  text: "It all started when I decided to invest in crocodile feet. As it turns out, it was a hugely untapped market in Croatia. Crocodile feet were known for their special abilities in both…",
  cover: "asdf",
  link: "ad",
  details: {
    dates: "1.2.3",
    clientPurpose: "fbekf",
    roles: "fd",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingBox />
      <FeaturedSection {...FEATURED_LOG} />
      <BentoLayout />
      <Section>
        <H1 url="/#recent" subtitle="me lately">
          Recent
        </H1>
        <Card>
          <ul>
            <AdventureSection {...YEARLY_ADVENTURES[0]} noYear={true} />
          </ul>
          <div className="mt-4 flex justify-end items-center gap-2">
            <span className="text-neutral-500 h-full">
              Want to see everything?
            </span>
            <div className="min-w-28 flex items-center justify-end h-full">
              <FowardButton href={"/more/adventures"}>see more</FowardButton>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
