export type TagInfo = {
  text: string;
  color: string;
  clickable?: boolean;
};

export const PERSONAL_TAGS = [
  {
    text: "she/her",
    color: "#e7d56e",
  },
  {
    text: "casey pei",
    color: "#d4e212",
  },
  {
    text: "裴婷",
    color: "#ffc548",
  },
];

export const TAGS: Record<string, TagInfo> = {
  nextjs: {
    text: "nextjs",
    color: "#e7d56e",
    clickable: true,
  },
  webdev: {
    text: "webev",
    color: "#d4e212",
    clickable: true,
  },
  reflection: {
    text: "reflection",
    color: "#ffc548",
    clickable: true,
  },
};
