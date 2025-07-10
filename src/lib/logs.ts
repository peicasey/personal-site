import { TagInfo, TAGS } from "./tags";

export type LogInfo = {
  title: string;
  date: string;
  topicTags: TagInfo[];
  text: string;
  link: string;
  cover: string;
  coverIsImage?: boolean;
};

export const LOGS: LogInfo[] = [
  {
    title:
      "Remaking my website blablablalalblablalbalbalblablablalblablablalalblablalbalbalalblablalbalbalblablablalalblablalbalbal",
    date: "7.25.25",
    topicTags: [TAGS.nextjs, TAGS.webdev],
    text: "I decided to refactor my website for some reason.",
    link: "website-refactor",
    cover: "apple",
  },
  {
    title: "Remaking my website",
    date: "7.25.25",
    topicTags: [TAGS.nextjs, TAGS.webdev],
    text: "I decided to refactor my website for some reason.",
    link: "website-refactor",
    cover: "bg-[url(/me.jpg)]",
    coverIsImage: true,
  },
];
