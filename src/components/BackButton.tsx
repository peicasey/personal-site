import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const BackButton = React.memo<Props>(function BackButtonFunction({
  href,
  children,
}) {
  return (
    <Link
      href={href}
      className="bg-accent dark:bg-accent group hover:gap-1 duration-200 w-min flex gap-2 items-center border px-2 rounded-full border-black dark:border-stone-500 dark:yellow-glow-sm"
    >
      <GoArrowLeft className="group-hover:-translate-x-1 duration-200" />
      <span className="text-sm whitespace-nowrap">{children}</span>
    </Link>
  );
});

export default BackButton;
