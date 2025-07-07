import React from "react";
import { jost } from "../fonts";
import { SOCIALS } from "@/lib/socials";
import SocialButton from "@/components/SocialButton";
import TextSlider from "@/components/TextSlider";
import StyledLink from "@/components/StyledLink";
import { FaArrowDownLong } from "react-icons/fa6";

const introText1 =
  "Welcome to my site! I'm a coder with eclectic interests in all things software dev. Currently studying";

const studying = [
  <StyledLink href="https://engineering.tamu.edu/cse/academics/eh-csce/index.html">
    Honors CS
  </StyledLink>,
  <span>at</span>,
  <StyledLink href="https://engineering.tamu.edu/cse/about/facts.html">
    Texas A&M University
  </StyledLink>,
  <span>and</span>,
];

const introText2 = "my way to graduation.";

const doing = [
  <StyledLink href="">studying 📖</StyledLink>,
  <StyledLink href="">working 📝</StyledLink>,
  <StyledLink href="">grinding 🔨</StyledLink>,
];

const whoAmI = [
  <span className="flex gap-[6px] items-center">
    <StyledLink href="https://tx.ag/acpcwebsite">
      coding (competitively)
    </StyledLink>
    🧑‍💻.
  </span>,
  <span className="flex gap-[6px] items-center">
    <StyledLink href="https://ibt.tamu.edu/faculty/kurt-zhang.html">
      doing undergrad biostats research
    </StyledLink>
    🧬.
  </span>,
  <span className="flex gap-[6px] items-center">
    <StyledLink href="https://people.engr.tamu.edu/davis/welcome.html">
      working on high power graph algos
    </StyledLink>
    🕸️.
  </span>,
  <span className="flex gap-[6px] items-center">
    <StyledLink href="https://pengso0o.itch.io/">
      making games with my team
    </StyledLink>
    👾.
  </span>,
  <span className="flex gap-[6px] items-center">
    <StyledLink href="https://github.com/peicasey">
      planning yet another project
    </StyledLink>
    💭.
  </span>,
  <span className="flex gap-[6px] items-center">
    <StyledLink href="https://tetr.io">playing too much tetris</StyledLink> 🧱.
  </span>,
];

const LandingBox = React.memo(function LandingBoxFunction() {
  const introText1_split = introText1.split(" ");
  const introText2_split = introText2.split(" ");

  return (
    <div className="bg-gradient-to-b from-[#ffc65c] to-[#fff9e6] dark:from-[#050000] dark:via-[#372100] dark:via-75% dark:to-[#c57c25] w-full h-[95vh] flex flex-col pt-32 sm:pt-28 lg:pt-40 px-8 sm:px-12 md:px-16 lg:px-20">
      <div className="w-full h-full flex flex-col sm:flex-row">
        <div className="w-1/2"></div>
        <div className="flex flex-col gap-3 w-full">
          <p className="italic text-md md:text-lg">hey hi hello! :) it's</p>
          <h1
            className="font-bold uppercase text-7xl lg:text-8xl text-orange-yellow dark:text-white text-outline-black"
            style={jost.style}
          >
            Consistently coding,
          </h1>
          <h1
            className="font-bold uppercase text-7xl lg:text-8xl text-orange-yellow dark:text-white text-outline-black"
            style={jost.style}
          >
            Occasionally good.
          </h1>
          <div className="flex flex-wrap gap-1 items-center">
            {introText1_split.map((word1, i1) => (
              <span key={i1}>{word1}</span>
            ))}
            {studying.map((study, j) => (
              <span key={j}>{study}</span>
            ))}
            <TextSlider items={doing} />
            {introText2_split.map((word2, i2) => (
              <span key={i2}>{word2}</span>
            ))}
          </div>
          <p>
            Previously{" "}
            <StyledLink href="https://palantir.com">
              @Palantir Technologies
            </StyledLink>
            ,{" "}
            <StyledLink href="https://arbin.com">@Arbin Instruments</StyledLink>
            , &{" "}
            <StyledLink href="htts://ibt.tamu.edu/">
              @Institute of Biosciences and Technology
            </StyledLink>
            .
          </p>
          <div className="w-full flex flex-wrap gap-2 items-center">
            <>You'll find me</>
            <TextSlider items={whoAmI} />
          </div>
          <div className="flex gap-2">
            {Object.values(SOCIALS).map((social, i) => (
              <SocialButton key={i} {...social} importantOnly={true} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-stone-500 dark:text-stone-300 w-full pb-4 flex items-center justify-center">
        <FaArrowDownLong className="animate-bounce" />
      </div>
    </div>
  );
});

export default LandingBox;
