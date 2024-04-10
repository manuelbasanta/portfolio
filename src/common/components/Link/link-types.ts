import { ReactNode } from 'react';

export enum LinkTypes {
  REGULAR = 'regular',
  BUTTON = 'button'
}

export type LinkProps = {
  href: string;
  children: ReactNode;
  target?: '_self' | '_blank';
  type?: LinkTypes
};
