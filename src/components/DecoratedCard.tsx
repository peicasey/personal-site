import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const DecoratedCard = React.memo<Props>(function DecoratedCardFunction({
  className,
  children,
}) {
  return (
    <div className="w-full flex flex-col gap-4 items-end">
      <div className="w-full flex items-end justify-between">
        <div
          className={cn(
            "w-full h-full flex flex-col sm:flex-row gap-6 border border-black dark:border-stone-500 dark:yellow-glow-md bg-accent dark:bg-black rounded-md p-6",
            className
          )}
        >
          {children}
        </div>
        <div className="translate-x-4 translate-y-7 select-none w-[1px] h-[60px] bg-basically-orange"></div>
      </div>
      <div className="translate-x-7 select-none w-[60px] h-[1px] bg-basically-orange"></div>
    </div>
  );
});

export default DecoratedCard;
