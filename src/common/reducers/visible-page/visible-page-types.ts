export enum Page {
  HOME = 'WELCOME',
  EXPERIENCE = 'EXPERIENCE',
  YOUTUBE = 'YOUTUBE',
  WHOAMI = 'ABOUT ME',
}

export type PageVisibility = {
  page: Page;
  intersectionRatio: number;
}

export type VisiblePageState = {
  HOME: number;
  EXPERIENCE: number;
  YOUTUBE: number;
  WHOAMI: number;
};
