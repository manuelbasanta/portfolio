import React, { FC } from 'react';
import Link from '../../../common/components/Link/Link';
import List from '../../../common/components/List/List';
import { TimelineStep } from '../timelime-types';

const Content: FC<TimelineStep> = ({ content, title, header }) => (
  <div className='timeline__content'>
    <div className='timeline__content-header'>{ header }</div>
    <div className='timeline__content-text'>
      <div className='timeline__content-title'>
        <div className='timeline__content-position'>{ title.position }</div>
        <div className='timeline__content-company'><Link href={title.company.url}>{ title.company.name }</Link></div>
      </div>
      <div className='timeline__content-subtitle'>
        <List items={content} />
      </div>
    </div>
  </div>
);

export default Content;
