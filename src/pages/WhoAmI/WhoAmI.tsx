/* eslint-disable max-len */
import React, { useRef } from 'react';
import Button from '../../common/components/Button/Button';
import Link from '../../common/components/Link/Link';
import { LinkTypes } from '../../common/components/Link/link-types';
import useIntersectionObserver from '../../common/hooks/useIntersectionObserver';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import Title from '../../components/Title/Title';

const WhoAmI = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.WHOAMI);
  const animationEntry = useIntersectionObserver(ref, { freezeOnceVisible: true });

  return (
    <div ref={ref} className='whoami'>
      <div className='whoami__container'>
        <Title title='About me' subtitle='~: whoami' />
        <p>
          Hi! My name is <b>Manuel</b>, I build web stuff. I have over 6 years experience in hands-on design, web development and programming more generally.
        </p>
        <p>
          I&apos;ve worked in many diferent positions, in huge corporations and in small companies but my goal has always been the same: to bridge the gap between <b>code</b> and <b>design</b>. If this site got your attention then feel free to contact me.
        </p>
        <Link href='mailto:manuelbasanta1@gmail.com' type={LinkTypes.BUTTON}>
          <Button label='Contact me!' />
        </Link>
      </div>
      <div className='whoami__moving-border' data-animate={animationEntry?.isIntersecting}>
        <div className='whoami__concept whoami__concept--design'>Design</div>
        <div className='whoami__concept whoami__concept--coding'>Coding</div>
      </div>
    </div>
  );
};

export default WhoAmI;
