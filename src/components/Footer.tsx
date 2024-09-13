import React from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { SOCIALS } from "@/lib/socials";
import SocialButton from "./SocialButton";
import { LINK_STYLE } from "@/lib/linkStyle";

const Footer = React.memo(function FooterFunction() {
  const heart: React.ReactElement = (
    <div className="group">
      <span>
        <FaHeart className="text-orange-yellow group-hover:hidden mx-2 yellow-glow-md" />
      </span>
      <span className="hidden group-hover:block mx-[0.31rem]">🫀</span>
    </div>
  );

  return (
    <footer className="flex flex-col gap-8 p-8 md:p-16 lg:px-28 xl:px-36 w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">
          Congrats on scrolling all the way down!
        </h2>
        <div className="">
          Feel free to reach out at{" "}
          <Link
            href="mailto:peicasey@gmail.com"
            target="_blank"
            referrerPolicy="no-referrer"
            className={LINK_STYLE}
          >
            peicasey@gmail.com
          </Link>
          . Always down to chat! :D
        </div>
        <div className="flex gap-2">
          {Object.values(SOCIALS).map((social, i) => (
            <SocialButton key={i} {...social} />
          ))}
        </div>
      </div>
      <div className="flex items-center">
        Made with {heart}
        by Casey Pei
      </div>
    </footer>
  );
});

export default Footer;
