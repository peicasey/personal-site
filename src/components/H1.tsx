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
    <div className="flex gap-4 items-center justify-between w-full">
      <div className="flex gap-4">
        <a
          href={url}
          className="text-2xl font-bold text-generic-yellow hover:text-orange-yellow"
        >
          #
        </a>
        <h1 id={id} className="text-6xl font-bold uppercase" style={jost.style}>
          {children}
        </h1>
      </div>
      <div className="w-full h-[2px] bg-stone-600"></div>
      <div className="hidden md:block flex-shrink-0 min-w-0 w-fit md:max-w-[150px] lg:max-w-[250px] overflow-hidden text-ellipsis">
        <span className="truncate">{subtitle}</span>
      </div>
    </div>
  );
});

export default H1;
