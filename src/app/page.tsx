import LandingBox from "@/app/_sections/LandingBox";
import FeaturedSection from "./_sections/FeaturedSection";
import { LogInfo } from "@/lib/logs";
import BentoLayout from "@/components/BentoLayout";

const FEATURED_LOG: LogInfo = {
  title: "How I Became the Richest Man Alive",
  topicTags: [
    { text: "wealth", color: "#959c2e" },
    { text: "grindset", color: "#d4e212" },
    { text: "alpha", color: "#ffaa20" },
  ],
  text:
    "It all started when I decided to invest in crocodile feet. As it turns out, it was a hugely untapped market in Croatia. Crocodile feet were known for their special abilities in both…",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingBox />
      <FeaturedSection {...FEATURED_LOG} />
      <BentoLayout />
    </main>
  );
}
