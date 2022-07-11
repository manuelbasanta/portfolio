import { FC } from 'react';

export enum LogoSize {
  BIG = 'big',
  SMALL = 'small',
}

export type LogoProps = {
  size: LogoSize;
  image: FC;
};
