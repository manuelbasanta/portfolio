import React, { FC } from 'react';

const Footer: FC = () => (
  <footer className='footer'>
    { `Manuel Basanta © ${new Date().getFullYear()}` }
  </footer>
);

export default Footer;
