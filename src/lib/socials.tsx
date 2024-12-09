import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdContactPage } from "react-icons/md";
import { FaItchIo } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";
import { IoMail } from "react-icons/io5";

export type Social = {
  platform: string;
  link: string;
  icon: React.ReactNode;
  important?: boolean;
};

export const SOCIALS = {
  RESUME: {
    platform: "Resume",
    link: "/404",
    icon: <MdContactPage />,
    important: true,
  },
  EMAIL: {
    platform: "Email",
    link: "mailto:peicasey@gmai.com",
    icon: <IoMail />,
    important: true,
  },
  EMAIL_FULL: {
    platform: "peicasey@gmail.com",
    link: "mailto:peicasey@gmai.com",
    icon: <IoMail />,
    important: false,
  },
  LINKEDIN: {
    platform: "LinkedIn",
    link: "https://linkedin.com/in/caseypei",
    icon: <BiLogoLinkedinSquare />,
    important: true,
  },
  GITHUB: {
    platform: "Github",
    link: "https://github.com/peicasey",
    icon: <TbBrandGithubFilled />,
    important: true,
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
