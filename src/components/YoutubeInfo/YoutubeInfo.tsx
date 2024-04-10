import React, { FC } from 'react';
import { YouTubeChannelData } from '../../common/reducers/youtube/youtube-types';

const YoutubeInfo: FC<YouTubeChannelData> = ({
  subscriberCount,
  videoCount,
  viewCount,
}) => (
  <div className='youtube-info'>
    <div className='youtube-info__data'>
      <span className='youtube-info__number'>{Number(videoCount).toLocaleString()}</span> Uploads
    </div>
    <div className='youtube-info__data'>
      <span className='youtube-info__number'>{Number(subscriberCount).toLocaleString()}</span> Subscribers
    </div>
    <div className='youtube-info__data'>
      <span className='youtube-info__number'>{Number(viewCount).toLocaleString()}</span> Total views
    </div>
  </div>
);

export default YoutubeInfo;
