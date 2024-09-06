import { Jost, Atkinson_Hyperlegible } from "next/font/google";

export const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export const atkins = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});
