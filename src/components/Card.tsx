import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Card = React.memo<Props>(function CardFunction({ className, children }) {
  return (
    <div
      className={cn(
        "bg-accent dark:bg-black rounded-md py-4 sm:py-8 px-4 sm:px-8 border border-black dark:border-stone-500 dark:yellow-glow-md w-full",
        className
      )}
    >
      {children}
    </div>
  );
});

export default Card;
