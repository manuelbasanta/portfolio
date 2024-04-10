import React, { FC } from 'react';
import { TabHeaderProps } from '../tabs-types';

const TabHeader: FC<TabHeaderProps> = ({ text, onClick, selected }) => (
  <button data-selected={selected} type='button' className='tab-header' onClick={onClick}>{text}</button>
);

export default TabHeader;
