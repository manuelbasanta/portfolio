import { FC } from 'react';
import URL from '../../common/types/url-types';

export type BoxProps = {
  title: string;
  description: string;
  tags: string[];
  image: FC;
  url: URL;
};
