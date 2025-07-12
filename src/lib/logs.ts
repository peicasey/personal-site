import { TagInfo, TAGS } from "./tags";

export type ProjDetails = {
  clientPurpose: string;
  dates: string;
  roles: string;
};

export type Details = {
  topic: string;
  date: string;
};

export const DetailsDisplay: Record<string, string> = {
  clientPurpose: "Client/Purpose",
  dates: "Timeline",
  roles: "Role",
  topic: "Topic",
  date: "Date",
};

export type LogDetails = ProjDetails | Details;

export type LogInfo = {
  title: string;
  date: string;
  topicTags: TagInfo[];
  text: string;
  link: string;
  cover: string;
  coverIsImage?: boolean;
  details: LogDetails;
};

// TODO: make this like the moreInfo ojbect? idk
export const LOGS: Record<string, LogInfo> = {
  WebsiteRefactor: {
    title:
      "Remaking my website blablablalalblablalbalbalblablablalblablablalalblablalbalbalalblablalbalbalblablablalalblablalbalbal",
    date: "7.25.25",
    topicTags: [TAGS.nextjs, TAGS.webdev],
    text: "I decided to refactor my website for some reason.",
    link: "website-refactor",
    cover: "apple",
    details: {
      clientPurpose: "Personal",
      dates: "7.12.25",
      roles: "Lead Developer",
    },
  },
  WebsiteRefactor2: {
    title: "Remaking my website",
    date: "7.25.25",
    topicTags: [TAGS.nextjs, TAGS.webdev],
    text: "I decided to refactor my website for some reason.",
    link: "website-refactor",
    cover: "url(/me.jpg)",
    coverIsImage: true,
    details: {
      clientPurpose: "Personal",
      dates: "7.12.25",
      roles: "Lead Developer",
    },
  },
};

export const LOG_INFO = Object.values(LOGS);
