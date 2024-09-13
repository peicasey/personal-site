import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdContactPage } from "react-icons/md";
import { FaItchIo } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";

export type Social = {
  platform: string;
  link: string;
  icon: React.ReactNode;
};

export const SOCIALS = {
  RESUME: {
    platform: "Resume",
    link: "/404",
    icon: <MdContactPage />,
  },
  LINKEDIN: {
    platform: "LinkedIn",
    link: "https://linkedin.com/in/caseypei",
    icon: <BiLogoLinkedinSquare />,
  },
  GITHUB: {
    platform: "Github",
    link: "https://github.com/peicasey",
    icon: <TbBrandGithubFilled />,
  },
  ITCHIO: {
    platform: "Itch.io",
    link: "/404",
    icon: <FaItchIo />,
  },
  DEVPOST: {
    platform: "Devpost",
    link: "/404",
    icon: <SiDevpost />,
  },
} as const;
