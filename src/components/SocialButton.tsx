import { Social } from "@/lib/socials";
import Link from "next/link";
import React from "react";

interface Props extends Social {}

const SocialButton = React.memo<Props>(function SectionButtonFunction({
  platform,
  link,
  icon,
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg p-2 rounded-md dark:hover:yellow-glow-sm hover:-translate-y-1 duration-200"
      aria-label={platform}
    >
      {icon}
    </Link>
  );
});

export default SocialButton;
