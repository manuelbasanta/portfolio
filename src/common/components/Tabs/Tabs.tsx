import React, { FC, useState } from 'react';
import TabHeader from './components/TabHeader';
import { TabsProps } from './tabs-types';

const Tabs: FC<TabsProps> = ({ tabHeaders, children, defaultSelection = 0 }) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelection);

  const handleClick = (tab:number) => {
    setSelectedTab(tab);
  };

  return (
    <div className='tabs'>
      {tabHeaders.map((header, index) => (
        <TabHeader
          selected={index === selectedTab}
          key={header}
          text={header}
          onClick={() => handleClick(index)}
        />
      ))}
      {React.Children.map(children, (child, index) => index === selectedTab && child)}
    </div>
  );
};

export default Tabs;
