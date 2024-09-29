import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import React from "react";
import { useRouter } from "next/navigation";
import DefaultBackButton from "./DefaultBackButton";

interface Props {
  href?: string;
  children: React.ReactNode;
}

const BackButton = React.memo<Props>(function BackButtonFunction({
  href,
  children,
}) {
  const router = useRouter();

  return href == null ? (
    <DefaultBackButton>{children}</DefaultBackButton>
  ) : (
    <Link
      href={href}
      className="bg-accent dark:bg-accent group hover:gap-1 duration-200 w-min flex gap-2 items-center border pl-2 pr-3 py-1 rounded-full border-black dark:border-stone-500 dark:yellow-glow-sm"
    >
      <GoArrowLeft className="group-hover:-translate-x-1 duration-200" />
      <span className="text-sm whitespace-nowrap">{children}</span>
    </Link>
  );
});

export default BackButton;
