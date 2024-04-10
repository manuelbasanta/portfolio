import URL from '../../common/types/url-types';

export type TimelineStep = {
  header: string,
  title: {
    position: string,
    company: {
      name: string,
      url: URL,
    },
  },
  content: string[]
};

export type TimelineState = {
  steps: TimelineStep[],
};
