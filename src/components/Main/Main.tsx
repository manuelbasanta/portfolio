import React, { FC } from 'react';
import { MainProps } from './main-types';

const Main: FC<MainProps> = ({ children }) => (
  <main className='main'>
    {children}
  </main>
);

export default Main;
