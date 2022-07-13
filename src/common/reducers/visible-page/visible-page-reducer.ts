import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageVisibility, VisiblePageState } from './visible-page-types';

const initialState: VisiblePageState = {
  HOME: 0,
  EXPERIENCE: 0,
  YOUTUBE: 0,
  WHOAMI: 0,
  PROJECTS: 0,
};

const visiblePageReducer = createSlice({
  name: 'visible-page',
  initialState,
  reducers: {
    setVisiblePage: (state, { payload }: PayloadAction<PageVisibility>) => {
      const { page, intersectionRatio } = payload;
      return { ...state, [page]: intersectionRatio };
    },
  },
});

export const { setVisiblePage } = visiblePageReducer.actions;
export default visiblePageReducer.reducer;
