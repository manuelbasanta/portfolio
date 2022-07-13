import React, { FC } from 'react';
import Palette from '../Palette/Palette';

const Footer: FC = () => (
  <footer className='footer'>
    <div className='footer__container'>
      { `Manuel Basanta © ${new Date().getFullYear()}` }
      <Palette />
    </div>
  </footer>
);

export default Footer;
