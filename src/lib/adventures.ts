export type AdventureInfo = {
  description: string;
  link: string;
  month: string;
  symbol: string;
  important: boolean;
  internal?: boolean;
};

export type YearlyAdventures = {
  year: number;
  adventures: AdventureInfo[];
};
