import React, { FC } from 'react';
import { TabsContentProps } from '../tabs-types';

const TabContent: FC<TabsContentProps> = ({ children }) => (
  <div className='tab-content'>
    {children}
  </div>
);

export default TabContent;
