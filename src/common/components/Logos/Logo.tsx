import React, { FC } from 'react';
import { LogoProps } from './logos-types';

const Logo: FC<LogoProps> = ({ size, image }) => {
  const Image = image;
  return (
    <div className={`logo logo--${size}`}>
      <Image />
    </div>
  );
};

export default Logo;
