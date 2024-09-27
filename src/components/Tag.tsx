import React from "react";
import { TagInfo } from "@/lib/tags";
import Link from "next/link";

interface Props extends TagInfo {}

const Tag = React.memo<Props>(function TagFunction({ text, color }) {
  return (
    <Link
      href=""
      className={`whitespace-nowrap h-min text-sm border border-black text-black bg-[var(--color)] dark:bg-transparent dark:border-[var(--color)] dark:text-[var(--color)] rounded-full px-2 hover:scale-105 duration-200`}
      style={
        {
          "--color": color,
        } as React.CSSProperties
      }
    >
      {text}
    </Link>
  );
});

export default Tag;
