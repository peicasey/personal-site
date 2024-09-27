import H1 from "@/components/H1";
import Section from "@/components/Section";
import React from "react";
import Tag from "@/components/Tag";
import Link from "next/link";
import { jost } from "../fonts";
import { LogInfo } from "@/lib/logs";
import DecoratedCard from "@/components/DecoratedCard";

interface Props extends LogInfo {}

const FeaturedSection = React.memo<Props>(function FeaturedSectionFunction({
  title,
  topicTags,
  text,
}) {
  return (
    <Section>
      <H1 url="/#featured" subtitle="actually decent content">
        Featured
      </H1>
      <DecoratedCard>
        <div className="w-full sm:w-[15rem] min-h-[10rem] h-full select-none text-2xl border border-black bg-generic-yellow rounded-md p-8 flex items-center justify-center">
          ☀️🐊🍊
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold" style={jost.style}>
              {title}
            </h2>
            <div className="flex gap-2">
              {topicTags.map((tag, i) => (
                <Tag {...tag} key={i} />
              ))}
            </div>
            <p>{text}</p>
          </div>
          <div className="w-full flex justify-end">
            <Link
              href=""
              className="font-bold text-stone-500 lowercase"
              style={jost.style}
            >
              Read More
            </Link>
          </div>
        </div>
      </DecoratedCard>
    </Section>
  );
});

export default FeaturedSection;
