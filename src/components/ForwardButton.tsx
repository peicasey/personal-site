import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const FowardButton = React.memo<Props>(function FowardButtonFunction({
  href,
  children,
}) {
  return (
    <Link
      href={href}
      className="bg-accent dark:bg-accent group hover:gap-1 duration-200 w-min flex gap-2 items-center border px-2 rounded-full border-black dark:border-stone-500 dark:yellow-glow-sm"
    >
      <span className="text-sm whitespace-nowrap">{children}</span>
      <GoArrowRight className="group-hover:translate-x-1 duration-200" />
    </Link>
  );
});

export default FowardButton;
