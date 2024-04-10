import { FC } from 'react';
import { LogoSize } from '../../common/components/Logos/logos-types';
import URL from '../../common/types/url-types';

export type BoxProps = {
  title: string;
  description: string;
  tags: string[];
  image: FC;
  imageSize: LogoSize;
  url: URL;
};
