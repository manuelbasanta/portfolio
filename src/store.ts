import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './common/reducers/theme/theme-reducer';
import visiblePageReducer from './common/reducers/visible-page/visible-page-reducer';
import timelineReducer from './components/Timeline/timeline-reducer';
import youtubeReducer from './common/reducers/youtube/youtube-reducer';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    timeline: timelineReducer,
    visibilePage: visiblePageReducer,
    youtube: youtubeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
