import React from "react";
import { jost } from "@/app/fonts";

interface Props {
  url: string;
  subtitle: string;
  children: React.ReactNode;
}

const H1 = React.memo<Props>(function H1Function({ url, subtitle, children }) {
  const match = url ? url.match(/[^#]*$/) : null;
  const id = match ? match[0] : "";

  return (
    <div className="flex gap-2 sm:gap-4 items-center justify-between w-full">
      <div className="flex gap-4">
        <a
          href={url}
          className="text-md sm:text-2xl font-bold text-orange-yellow hover:text-basically-orange dark:text-generic-yellow dark:hover:text-orange-yellow absolute -translate-x-4 sm:-translate-x-6 md:-translate-x-8"
          aria-label={"direct link to " + id}
        >
          #
        </a>
        <h1
          id={id}
          className="text-2xl sm:text-4xl font-bold uppercase"
          style={jost.style}
        >
          {children}
        </h1>
      </div>
      <div className="w-full h-[2px] bg-stone-400"></div>
      <div className="hidden md:block flex-shrink-0 min-w-0 w-fit md:max-w-[150px] lg:max-w-[250px] overflow-hidden text-ellipsis text-stone-400">
        <span className="truncate">{subtitle}</span>
      </div>
    </div>
  );
});

export default H1;
