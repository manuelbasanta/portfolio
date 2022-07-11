import React, { useRef } from 'react';
import Button from '../../common/components/Button/Button';
import Link from '../../common/components/Link/Link';
import { LinkTypes } from '../../common/components/Link/link-types';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import Description from '../../components/Description/Description';
import Title from '../../components/Title/Title';

const WhoAmI = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.WHOAMI);

  return (
    <div ref={ref} className='whoami'>
      <div className='whoami__container'>
        <Title title='About me' subtitle='~: whoami' />
        <Description text='Hi! My name is Manuel, I build web stuff. I have over 6 years experience in hands-on design, web development and programming more generally.' />
        <Description text='My goal in my work is to bridge the gap between code and design.' />
        <Link href='mailto:manuelbasanta1@gmail.com' type={LinkTypes.BUTTON}>
          <Button label='Contanct me!' />
        </Link>
      </div>
      <div className='whoami__moving-border'>
        <div className='whoami__concept whoami__concept--design'>Design</div>
        <div className='whoami__concept whoami__concept--coding'>Coding</div>
      </div>
    </div>
  );
};

export default WhoAmI;
