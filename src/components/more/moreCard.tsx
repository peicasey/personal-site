import { MoreInfo } from "@/lib/moreInfo";
import React from "react";
import Card from "../Card";
import ForwardButton from "../arrow-buttons/ForwardButton";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props extends MoreInfo {
  className?: string;
}

const MoreCard = React.memo<Props>(function MoreCardFunction({
  title,
  description,
  url,
  pic,
  className,
}) {
  return (
    <li>
      <Card className={cn("p-0 sm:p-0 md:p-0 lg:p-0", className)}>
        <div className="border-b border-black dark:border-white rounded-t-md overflow-hidden">
          {pic.type === "PIC" ? (
            <Image src={pic.src} alt={""} height={400} width={400} />
          ) : pic.type === "EMOJIS" ? (
            <div
              className={`select-none flex p-4 text-xl h-full items-center justify-center whitespace-nowrap bg-[var(--color)] dark:bg-[var(--color)] `}
              style={
                {
                  "--color": pic.color,
                } as React.CSSProperties
              }
            >
              {pic.icons}
            </div>
          ) : null}
        </div>
        <div className="p-4 sm:p-8">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-stone-500">{description}</p>
          <div className="w-full flex justify-end pt-8">
            <ForwardButton href={url}>check out</ForwardButton>
          </div>
        </div>
      </Card>
    </li>
  );
});

export default MoreCard;
