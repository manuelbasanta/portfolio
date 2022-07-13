import React, { FC } from 'react';
import { TitleProps } from './title-types';

const Title: FC<TitleProps> = ({ title, subtitle }) => (
  <div className='title-container'>
    <h1 className='title'>{title}</h1>
    { subtitle && <p className='title__sub-title'>{subtitle}</p> }
  </div>
);

export default Title;
