import { FC } from 'react';

export enum LogoSize {
  BIG = 'big',
  SMALL = 'small',
  XSMALL = 'xsmall',
}

export type LogoProps = {
  size: LogoSize;
  image: FC;
};
