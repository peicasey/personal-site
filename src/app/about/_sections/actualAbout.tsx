import DecoratedCard from "@/components/DecoratedCard";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import Image from "next/image";

const PERSONAL_TAGS = [
  {
    text: "she/her",
    color: "#e7d56e",
  },
  {
    text: "casey pei",
    color: "#d4e212",
  },
  {
    text: "裴婷",
    color: "#ffc548",
  },
];

export default function ActualAbout() {
  return (
    <Section>
      <H1 url="/about/#about" subtitle="hint: casey">
        About
      </H1>
      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex justify-center w-full sm:w-auto">
          <Image
            src="/me.jpg"
            alt="An illustration of me."
            width={200}
            height={200}
            className="w-28 sm:w-56 border border-black dark:border-stone-500 dark:yellow-glow-sm rounded-full"
          />
        </div>
        <DecoratedCard>
          <div className="flex gap-2">
            {PERSONAL_TAGS.map((tag, i) => (
              <Tag {...tag} key={i} />
            ))}
          </div>
        </DecoratedCard>
      </div>
    </Section>
  );
}
