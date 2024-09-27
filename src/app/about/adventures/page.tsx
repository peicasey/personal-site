import { jost } from "@/app/fonts";
import YEARLY_ADVENTURES from "../../../../public/adventures.json";
import Adventure from "@/components/about/adventures/adventure";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import Card from "@/components/Card";
import BackButton from "@/components/BackButton";

export default function Adventures() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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
              <li className="mt-2" key={"yearAdventure" + i}>
                <div className="flex gap-2 sm:gap-4 items-center justify-between w-full">
                  <h2
                    className="text-lg font-bold uppercase"
                    style={jost.style}
                  >
                    {yearlyAdventures.year}
                  </h2>
                  <div className="w-full h-[1px] bg-stone-400"></div>
                </div>
                <ul>
                  {yearlyAdventures.adventures.map((adventure, j) => (
                    <Adventure {...adventure} key={"adventure" + j} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </main>
  );
}
