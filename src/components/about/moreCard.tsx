import { MoreInfo } from "@/lib/moreInfo";
import React from "react";
import Card from "../Card";
import ForwardButton from "../ForwardButton";
import Image from "next/image";

interface Props extends MoreInfo {}

const MoreCard = React.memo<Props>(function MoreCardFunction({
  title,
  description,
  url,
  pic,
}) {
  return (
    <li>
      <Card className="p-0 sm:p-0 md:p-0 lg:p-0">
        <div className="border-b border-black dark:border-white rounded-t-md overflow-hidden">
          {pic.type === "PICTURE" ? (
            <Image src={pic.src} alt={""} height={400} width={400} />
          ) : (
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
          )}
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
