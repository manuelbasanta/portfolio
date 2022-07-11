import { RefObject, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVisiblePage } from '../reducers/visible-page/visible-page-reducer';
import { Page } from '../reducers/visible-page/visible-page-types';
import useIntersectionObserver from './useIntersectionObserver';

const useVisiblePage = (elementRef: RefObject<Element>, page: Page) => {
  const dispatch = useDispatch();
  const entry = useIntersectionObserver(elementRef, { threshold: [0.2, 0.4, 0.6, 0.8, 1.0] });

  useEffect(() => {
    dispatch(setVisiblePage({ page, intersectionRatio: entry?.intersectionRatio }));
  }, [entry?.intersectionRatio]);
};

export default useVisiblePage;
