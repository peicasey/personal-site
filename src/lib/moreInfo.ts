type Pic =
  | { type: "PICTURE"; src: string }
  | { type: "EMOJIS"; color: string; icons: string };

export type MoreInfo = {
  title: string;
  description: string;
  url: string;
  pic: Pic;
};
