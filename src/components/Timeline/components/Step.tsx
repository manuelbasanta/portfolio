import React, { FC } from 'react';
import { TimelineStep } from '../timelime-types';
import Ball from './Ball';
import Content from './Content';

const Step: FC<TimelineStep> = ({ header, content, title }) => (
  <div className='timeline__step'>
    <Ball />
    <Content title={title} content={content} header={header} />
  </div>
);

export default Step;
