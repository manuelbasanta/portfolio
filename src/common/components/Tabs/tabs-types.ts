import { ReactElement, ReactNode } from 'react';

export type TabHeaderProps = {
  text: string;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type TabsContentProps = {
  children: ReactNode;
};

export type TabsProps = {
  tabHeaders: string[];
  children: ReactElement<TabsContentProps> | ReactElement<TabsContentProps>[];
  defaultSelection?: number;
};
