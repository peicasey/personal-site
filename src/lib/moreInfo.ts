export type MoreInfo = {
  title: string;
  description: string;
  url: string;
  pic: EmojiPic | ImagePic;
};

export enum PicType {
  EMOJIS = "EMOJIS",
  PIC = "PIC",
}

export type EmojiPic = {
  type: PicType.EMOJIS;
  color: string;
  icons: string;
};

type ImagePic = {
  type: PicType.PIC;
  src: string;
};
