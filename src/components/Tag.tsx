import React from "react";
import { TagInfo } from "@/lib/tags";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props extends TagInfo {}

const Tag = React.memo<Props>(function TagFunction({
  text,
  color,
  clickable = true,
}) {
  return (
    <div
      className={cn(
        "whitespace-nowrap h-min text-xs sm:text-sm border border-black text-black bg-[var(--color)] dark:bg-transparent dark:border-[var(--color)] dark:text-[var(--color)] rounded-full px-2",
        clickable && "hover:scale-105 duration-200",
        !clickable && "cursor-default"
      )}
      style={
        {
          "--color": color,
        } as React.CSSProperties
      }
    >
      {clickable ? (
        <Link href="" className={cn(!clickable && "cursor-default")}>
          {text}
        </Link>
      ) : (
        text
      )}
    </div>
  );
});

export default Tag;
