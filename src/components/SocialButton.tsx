import { Social } from "@/lib/socials";
import Link from "next/link";
import React from "react";

interface Props extends Social {
  importantOnly?: boolean;
}

const SocialButton = React.memo<Props>(function SectionButtonFunction({
  platform,
  link,
  icon,
  important,
  importantOnly = false,
}) {
  return importantOnly === false ||
    (importantOnly === true && important === true) ? (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg p-2 rounded-md dark:hover:yellow-glow-sm hover:-rotate-12 hover:scale-105 duration-200"
      aria-label={platform}
    >
      {icon}
    </Link>
  ) : (
    undefined
  );
});

export default SocialButton;
