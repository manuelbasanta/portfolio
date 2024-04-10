import axios from 'axios';
import { YouTubeChannelData } from '../common/reducers/youtube/youtube-types';
import { YoutubeServiceData } from './youtube-types';

const URL = 'https://manuelbasanta.herokuapp.com/api/youtube/channel_info';

const getChannelInfo = async (): Promise<YouTubeChannelData> => {
  const response = await axios.get<YoutubeServiceData>(URL);
  const { subscriberCount, videoCount, viewCount } = response.data.statistics;
  const { title } = response.data.snippet;

  return {
    loaded: true,
    subscriberCount,
    videoCount,
    viewCount,
    name: title,
  };
};

const youtubeService = {
  getChannelInfo,
};

export default youtubeService;
