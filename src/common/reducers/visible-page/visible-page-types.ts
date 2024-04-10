export enum Page {
  HOME = 'WELCOME',
  EXPERIENCE = 'EXPERIENCE',
  YOUTUBE = 'YOUTUBE',
  WHOAMI = 'ABOUT ME',
  PROJECTS = 'PROJECTS',
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
  PROJECTS: number;
};
