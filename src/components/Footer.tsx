import React from "react";
import { FaHeart } from "react-icons/fa";
import { SOCIALS } from "@/lib/socials";
import SocialButton from "./SocialButton";
import StyledLink from "./StyledLink";

const Footer = React.memo(function FooterFunction() {
  const heart: React.ReactElement = (
    <div className="group hover:cursor-pointer hover:-translate-y-[2px] duration-500">
      <span>
        <FaHeart className="text-basically-orange dark:text-orange-yellow group-hover:hidden mx-2 dark:yellow-glow-md" />
      </span>
      <span className="hidden group-hover:block mx-[0.31rem] dark:pink-glow-md">
        🫀
      </span>
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
          <StyledLink href="mailto:peicasey@gmail.com">
            peicasey@gmail.com
          </StyledLink>
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
