import React, { useRef } from 'react';
import AnimationBlock from '../../common/components/AnimationBlock/AnimationBlock';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import Title from '../../components/Title/Title';

const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.HOME);

  return (
    <div ref={ref} className='home'>
      <div className='home-container'>
        <Title title='Manuel Basanta' subtitle='Software developer / Designer' />
        <AnimationBlock text='SCROLL' />
      </div>
    </div>
  );
};

export default Home;
