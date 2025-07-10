import { cn } from "@/lib/utils";
import React from "react";
import Card from "./Card";
import FowardButton from "./arrow-buttons/ForwardButton";
import Tag from "./Tag";
import { jost } from "@/app/fonts";
import { TagInfo } from "@/lib/tags";
import { LogInfo } from "@/lib/logs";
import Link from "next/link";

interface Props extends LogInfo {}

const LogCard = React.memo<Props>(function CardFunction({
  title,
  date,
  topicTags,
  text,
  link,
  cover,
  coverIsImage,
}) {
  return (
    <Link href={`/work/logs/${link}`}>
      <Card className="flex flex-col sm:flex-row gap-2 p-2 sm:p-2">
        {!coverIsImage ? (
          <div className="w-full sm:w-[6rem] min-h-[4rem] h-full select-none text-2xl border border-black bg-generic-yellow rounded-md p-8 flex items-center justify-center">
            {cover}
          </div>
        ) : (
          <div
            className={cn(
              cover,
              "w-full bg-cover bg-center sm:w-[6rem] min-h-[6rem] h-full select-none text-2xl border border-black rounded-md p-8"
            )}
          ></div>
        )}
        <div className="w-full flex flex-col justify-between px-2 py-1 relative overflow-hidden">
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex justify-between gap-8">
                <h2
                  className="text-xl font-bold pb-1 truncate"
                  style={jost.style}
                >
                  {title}
                </h2>
                <span className="text-stone-500">{date}</span>
              </div>
              <div className="flex gap-1">
                {topicTags.map((tag, i) => (
                  <Tag {...tag} key={i} />
                ))}
              </div>
            </div>
            <p>{text}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
});

export default LogCard;
