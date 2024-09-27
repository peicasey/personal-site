import React from "react";
import Link from "next/link";
import { jost } from "@/app/fonts";
import { AdventureInfo } from "@/lib/adventures";

interface Props extends AdventureInfo {}

const Adventure = React.memo<Props>(function TagFunction({
  link,
  symbol,
  description,
  month,
}) {
  return (
    <li className="flex justify-between items-center gap-4 p-2 hover:rounded-md hover:cursor-pointer hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center flex-grow-0"
      >
        <div className="aria-hidden select-none text-lg mr-2">{symbol}</div>
        <span className="text-sm sm:text-md lg:text-md lg:max-w-[40em] md:max-w-[20em] sm:max-w-[15em]">
          {description}
        </span>
      </Link>
      <div className="flex-grow h-[1px] min-w-[25px] bg-neutral-200 dark:bg-neutral-700"></div>
      <div
        className="text-sm sm:text-md font-bold min-w-[5em] text-right"
        style={jost.style}
      >
        {month}
      </div>
    </li>
  );
});

export default Adventure;
