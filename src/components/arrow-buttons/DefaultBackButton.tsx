"use client";

import { GoArrowLeft } from "react-icons/go";
import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const DefaultBackButton = React.memo<Props>(function DefaultBackButtonFunction({
  children,
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="bg-accent dark:bg-accent group hover:gap-1 hover:cursor-pointer duration-200 w-min flex gap-2 items-center border pl-2 pr-3 py-1 rounded-full border-black dark:border-stone-500 dark:yellow-glow-sm"
    >
      <GoArrowLeft className="group-hover:-translate-x-1 duration-200" />
      <span className="text-sm whitespace-nowrap">{children}</span>
    </div>
  );
});

export default DefaultBackButton;
