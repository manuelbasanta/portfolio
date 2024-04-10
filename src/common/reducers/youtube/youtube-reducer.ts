import { createSlice, Dispatch } from '@reduxjs/toolkit';
import youtubeService from '../../../services/youtube';
import { YouTubeChannelData } from './youtube-types';

const initialState:YouTubeChannelData = {
  loaded: false,
  name: '',
  subscriberCount: '',
  videoCount: '',
  viewCount: '',
};

const youtubeReducer = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    setYoutubeData: (state, action) => action.payload,
  },
});

const { setYoutubeData } = youtubeReducer.actions;

export const initializeYoutubeData = () => (
  async (dispatch: Dispatch) => {
    const youtubeData = await youtubeService.getChannelInfo();
    dispatch(setYoutubeData(youtubeData));
  }
);

export default youtubeReducer.reducer;
