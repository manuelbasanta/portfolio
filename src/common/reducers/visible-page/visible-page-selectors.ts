import { RootState } from '../../../store';

const selectVisiblePage = () => (state:RootState): string => {
  const result = Object.entries(state.visibilePage).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return result;
};

export default selectVisiblePage;
