import MoreCard from "@/components/about/moreCard";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import { MoreInfo } from "@/lib/moreInfo";
import MORE_ITEMS_RAW from "../../../../public/more.json";

export default function More() {
  const MORE_ITEMS = MORE_ITEMS_RAW as MoreInfo[];

  return (
    <Section>
      <H1 url="/about/#more" subtitle="other fun things">
        More
      </H1>
      <ul className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
        {MORE_ITEMS.map((more_item, i) => (
          <MoreCard key={i} {...more_item} />
        ))}
      </ul>
    </Section>
  );
}
