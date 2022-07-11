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
        <Title title='Programación Accesible' />
        <h2 className='youtube__description'>
          On my Youtube channel <Link href={URL.YOUTUBE}>Programación Accesible</Link> I share  what I know about frontend coding and design (in Spanish). Wanna have a look?
        </h2>
        <Link href={URL.YOUTUBE} type={LinkTypes.BUTTON}>
          <Button label='Visit my Youtube channel' />
        </Link>
      </div>
      <div ref={animationRef} className='youtube__billboard-contaier' data-animate={animationEntry?.isIntersecting}>
        <div className='youtube__billboard youtube__billboard-right'>
          <div className='youtube__billboard-content'>My Youtube<span className='copyright'>©</span> channel</div>
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
