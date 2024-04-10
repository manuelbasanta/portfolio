import React, { FC } from 'react';
import Palette from '../Palette/Palette';

const Footer: FC = () => (
  <footer className='footer'>
    <div className='footer__container'>
      { `Manuel Basanta © ${new Date().getFullYear()}` }
      <Palette />
      <p className='footer__credits'>Llama by Symbolon from NounProject.com</p>
    </div>
  </footer>
);

export default Footer;
