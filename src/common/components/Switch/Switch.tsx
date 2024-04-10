import React, { FC } from 'react';
import { SwitchProps } from './switch-types';

const Switch: FC<SwitchProps> = ({
  onClick,
  checkedIcon,
  uncheckedIcon,
  checked,
}) => (
  <label className='common-switch' htmlFor='common-switch__checkbox'>
    <input
      type='checkbox'
      className='common-switch__checkbox'
      id='common-switch__checkbox'
      onClick={onClick}
      defaultChecked={checked}
    />
    <span className='common-switch__slider'>
      { checkedIcon && <div>{ checkedIcon }</div> }
      { uncheckedIcon && <div>{ uncheckedIcon }</div> }
    </span>
  </label>
);

export default Switch;
