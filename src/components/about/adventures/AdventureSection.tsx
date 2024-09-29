import React from "react";
import { jost } from "@/app/fonts";
import { YearlyAdventures } from "@/lib/adventures";
import Adventure from "./Adventure";

interface Props extends YearlyAdventures {
  noYear?: boolean;
  importantOnly?: boolean;
}

const AdventureSection = React.memo<Props>(function AdventuresSectionFunction({
  noYear = false,
  importantOnly = false,
  year,
  adventures,
}) {
  return (
    <li className="mt-2" key={year}>
      {!noYear && (
        <div className="flex gap-2 sm:gap-4 items-center justify-between w-full">
          <h2 className="text-lg font-bold uppercase" style={jost.style}>
            {year}
          </h2>
          <div className="w-full h-[1px] bg-stone-400"></div>
        </div>
      )}
      <ul>
        {adventures.map((adventure, j) =>
          importantOnly ? (
            adventure.important && (
              <Adventure {...adventure} key={"adventure" + j} />
            )
          ) : (
            <Adventure {...adventure} key={"adventure" + j} />
          )
        )}
      </ul>
    </li>
  );
});

export default AdventureSection;
