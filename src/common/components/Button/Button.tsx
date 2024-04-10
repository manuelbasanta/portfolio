import React, { FC } from 'react';
import { ButtonProps } from './button-types';

const Button: FC<ButtonProps> = ({ label }) => (
  <button className='button' type='button'>{ label }</button>
);

export default Button;
