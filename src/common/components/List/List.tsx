import React, { FC } from 'react';
import COLOR from '../../types/color-types';
import { ListProps } from './list-types';

const List: FC<ListProps> = ({ items, bulletColor = COLOR.BACKGROUND }) => (
  <div className='list'>
    <ul>
      { items.map((item) => (
        <li data-bullet-color={bulletColor} key={item}><span>{item}</span></li>
      )) }
    </ul>
  </div>
);

export default List;
