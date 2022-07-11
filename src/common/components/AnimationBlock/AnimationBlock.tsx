import React, { FC } from 'react';
import { AnimationBlockProps } from './animation-block-types';

const AnimationBlock: FC<AnimationBlockProps> = ({ text }) => (
  <div className='animation-block'>
    <div className='animation-block__animation'>&nbsp;{text}</div>
  </div>
);

export default AnimationBlock;
