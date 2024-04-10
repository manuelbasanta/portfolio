import React, { FC, ReactNode } from 'react';
import COLOR from '../../common/types/color-types';

const createPalette = ():ReactNode => {
  const divs: ReactNode[] = [];
  Object.keys(COLOR).forEach(
    (color) => divs.push(<div key={color} className={color.toLocaleLowerCase()} />),
  );
  return divs;
};

const Palette: FC = () => (
  <div className='palette'>
    { createPalette() }
  </div>
);

export default Palette;
