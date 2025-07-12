import { cn } from "@/lib/utils";
import React from "react";
import Card from "./Card";
import Tag from "./Tag";
import { jost } from "@/app/fonts";
import { LogInfo } from "@/lib/logs";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

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
    // <Link href={`/work/logs/${link}`}>
    <Card className="flex flex-col sm:flex-row gap-2 p-2 sm:p-2">
      {!coverIsImage ? (
        <div className="w-full sm:w-[6rem] min-h-[4rem] h-full select-none text-2xl border border-black bg-generic-yellow rounded-md p-8 flex items-center justify-center">
          {cover}
        </div>
      ) : (
        <div
          className={cn(
            "w-full bg-cover bg-center sm:w-[6rem] min-h-[6rem] h-full select-none text-2xl border border-black rounded-md p-8"
          )}
          style={{ backgroundImage: cover }}
        ></div>
      )}
      <div className="w-full flex flex-col justify-between px-2 py-1 relative overflow-hidden">
        <div className="w-full flex flex-col gap-2 ">
          <div className="w-full ">
            <div className="w-full flex items-center justify-between gap-8">
              <Link
                href={`/work/logs/${link}`}
                className="w-[80%] group hover:gap-1 duration-200 flex gap-2 items-center"
              >
                <h2
                  className="text-xl font-bold pb-1 truncate"
                  style={jost.style}
                >
                  {title}
                </h2>
                <GoArrowRight className="min-w-[1em] group-hover:translate-x-2 duration-200" />
              </Link>
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
    // </Link>
  );
});

export default LogCard;
