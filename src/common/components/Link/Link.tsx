import React, { FC } from 'react';
import { LinkProps, LinkTypes } from './link-types';

const Link: FC<LinkProps> = ({
  children,
  href,
  type = LinkTypes.REGULAR,
  target = '_blank',
}) => (
  <a
    className='link'
    target={target}
    href={href}
    data-type={type}
    {...(target === '_blank' && { rel: 'noreferrer' })}
  >
    {children}
  </a>
);

export default Link;
