/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../common/components/Button/Button';
import Link from '../../common/components/Link/Link';
import { LinkTypes } from '../../common/components/Link/link-types';
import useAppDispatch from '../../common/hooks/useAppDispatch';
import useIntersectionObserver from '../../common/hooks/useIntersectionObserver';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import { initializeYoutubeData } from '../../common/reducers/youtube/youtube-reducer';
import selectYoutube from '../../common/reducers/youtube/youtube-selectors';
import URL from '../../common/types/url-types';
import Title from '../../components/Title/Title';
import YoutubeInfo from '../../components/YoutubeInfo/YoutubeInfo';

const YouTube = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.YOUTUBE);
  const animationEntry = useIntersectionObserver(animationRef, { freezeOnceVisible: true });
  const dispatch = useAppDispatch();
  const youtubeData = useSelector(selectYoutube());

  useEffect(() => {
    dispatch(initializeYoutubeData());
  }, []);

  return (
    <div ref={ref} className='youtube'>
      <div className='youtube__description-container'>
        <Title title='My Youtube channel' />
        <p className='youtube__description'>
          On my Youtube channel <b><Link href={URL.YOUTUBE}>Programación Accesible</Link></b> I share  what I know about <b>frontend, coding and design</b> (in Spanish).
        </p>
        <p className='youtube__description'>
          It&apos;s a place where I can <b>help</b> others while I also <b>learn</b> new stuff and get to practice what I already know. Wanna have a look?
        </p>
        <Link href={URL.YOUTUBE} type={LinkTypes.BUTTON}>
          <Button label='Visit my Youtube channel' />
        </Link>
      </div>
      <div ref={animationRef} className='youtube__billboard-container' data-animate={animationEntry?.isIntersecting}>
        <div className='youtube__billboard youtube__billboard-right'>
          <div className='youtube__billboard-content'>Programación Accesible ©</div>
        </div>
        {youtubeData.loaded && (
          <div className='youtube__billboard youtube__billboard-left'>
            <div className='youtube__billboard-content'><YoutubeInfo {...youtubeData} /></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTube;
