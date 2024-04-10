import React from 'react';

export type SwitchProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  checkedIcon?: string;
  uncheckedIcon?: string;
  checked: boolean;
};
