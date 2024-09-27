import MoreCard from "@/components/about/moreCard";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import MORE_ITEMS from "../../../../public/more.json";

export default function More() {
  return (
    <Section>
      <H1 url="/about/#more" subtitle="other fun things">
        More
      </H1>
      <ul className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
        {MORE_ITEMS.map((more_item, i) => (
          <MoreCard {...more_item} key={i} />
        ))}
      </ul>
    </Section>
  );
}
