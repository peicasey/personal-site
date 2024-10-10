import DecoratedCard from "@/components/DecoratedCard";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import SocialButton from "@/components/SocialButton";
import StyledLink from "@/components/StyledLink";
import Tag from "@/components/Tag";
import { SOCIALS } from "@/lib/socials";
import Image from "next/image";
import Link from "next/link";

const PERSONAL_TAGS = [
  {
    children: "she/her",
    color: "#e7d56e",
  },
  {
    children: "casey pei",
    color: "#d4e212",
  },
  {
    children: "裴婷",
    color: "#ffc548",
  },
];

export default function ActualAbout() {
  return (
    <Section>
      <H1 url="/about/#about" subtitle="longer description of me by me">
        About
      </H1>
      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex flex-col gap-2 items-center w-full sm:w-auto">
          <Image
            src="/me.jpg"
            alt="An illustration of me."
            width={200}
            height={200}
            className="w-28 sm:w-56 h-28 sm:h-44 border border-black dark:border-stone-500 dark:yellow-glow-sm rounded-full"
          />
          <div className="flex gap-2">
            {Object.values(SOCIALS).map((social, i) => (
              <SocialButton key={i} {...social} importantOnly={true} />
            ))}
          </div>
          <p className="text-center text-xs text-stone-600">
            <i>fig 1. image to humanize me</i>
          </p>
        </div>
        <DecoratedCard className="w-full sm:flex-col">
          <div className="flex gap-2">
            {PERSONAL_TAGS.map((tag, i) => (
              <Tag {...tag} key={i} />
            ))}
          </div>
          <p>
            <i>Hey hi hello!</i> My name is Casey Pei (as you may have guessed)
            and I am a coder/programmer/software engineer among other things.
          </p>
          <p>
            I love making interesting projects that are either entertaining or
            helpful and occassionally both -- combining accessible, aesthetic
            and intuitive design with an application of AI. As of now, I love
            frontend web dev and am working on becoming a React perf pro ⚡.
          </p>
          <p>
            Outside of stereotypical CS major activities, I am an enjoyer of
            Nightwing and other superheroes, partaker in digital art and
            animation, and loyal watcher of the{" "}
            <StyledLink target="_blank" href="https://youtube.com/@technoblade">
              Technoblade youtube channel
            </StyledLink>
            . You will often find me studying (taking a nap) in the Zachry
            Engineering Building, binging a new 3-hour video essay, and sending
            oddly specific online personality quizzes to friends.
          </p>
          <p>
            I can be reached at{" "}
            <StyledLink href={SOCIALS.EMAIL_FULL.link}>
              {SOCIALS.EMAIL_FULL.platform}
            </StyledLink>{" "}
            or via{" "}
            <StyledLink target="_blank" href={SOCIALS.LINKEDIN.link}>
              {SOCIALS.LINKEDIN.platform}
            </StyledLink>
            . Always down to chat! :D
          </p>
        </DecoratedCard>
      </div>
    </Section>
  );
}
