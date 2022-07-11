import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme, ThemeState } from './theme-types';

const storageTheme: Theme = localStorage.getItem('theme') as Theme;
const preferedColorScheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT;

const initialState: ThemeState = {
  type: storageTheme || preferedColorScheme,
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, { payload }: PayloadAction<Theme>) => ({ ...state, type: payload }),
  },
});

export const { changeTheme } = themeReducer.actions;
export default themeReducer.reducer;
