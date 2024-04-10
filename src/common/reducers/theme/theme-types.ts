export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum ThemeLogos {
  DARK = '🌚',
  LIGHT = '🌞',
}

export type ThemeState = {
  type: Theme;
};
