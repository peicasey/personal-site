import YEARLY_ADVENTURES from "../../../../public/adventures.json";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import Card from "@/components/Card";
import BackButton from "@/components/BackButton";
import AdventureSection from "@/components/about/adventures/AdventureSection";

export default function Adventures() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Section>
        <div className="w-full">
          <BackButton href="/about">back</BackButton>
        </div>
        <H1 url="" subtitle="Casual record of stuff I've been up to!">
          Adventures
        </H1>
        <Card>
          <ul
            role="list"
            className="divide-y divide-neutral-100 dark:divide-neutral-800"
          >
            {YEARLY_ADVENTURES.map((yearlyAdventures, i) => (
              <AdventureSection {...yearlyAdventures} />
            ))}
          </ul>
        </Card>
      </Section>
    </main>
  );
}
