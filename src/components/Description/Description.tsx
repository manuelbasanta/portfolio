import React, { FC } from 'react';
import { DescriptionProps } from './description-types';

const Description: FC<DescriptionProps> = ({ text }) => (
  <div className='description-container'>
    <div className='description'>{text}</div>
  </div>
);

export default Description;
