import MoreCard from "@/components/more/moreCard";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import { MoreInfo } from "@/lib/moreInfo";
import MORE_ITEMS_RAW from "../../../public/more.json";
import Page from "@/components/Page";

export default function More() {
  const MORE_ITEMS = MORE_ITEMS_RAW as MoreInfo[];

  return (
    <Page>
      <Section>
        <H1 url="/about/#more" subtitle="other fun things">
          More
        </H1>
        <div className="w-full">
          <p>
            If you need even more random information to dig around with on this
            site (should I be worried?)
          </p>
        </div>
        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
          {MORE_ITEMS.map((more_item, i) => (
            <MoreCard key={i} {...more_item} className="h-full" />
          ))}
        </ul>
      </Section>
    </Page>
  );
}
