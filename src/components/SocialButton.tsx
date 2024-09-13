import { Social } from "@/lib/socials";
import React from "react";

interface Props extends Social {}

const SocialButton = React.memo<Props>(function SectionButtonFunction({
  platform,
  link,
  icon,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md hover:yellow-glow-sm hover:-translate-y-1 duration-200"
      aria-label={platform}
    >
      {icon}
    </a>
  );
});

export default SocialButton;
