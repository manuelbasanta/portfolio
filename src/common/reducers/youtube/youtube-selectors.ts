import { RootState } from '../../../store';

const selectYoutube = () => (state:RootState) => state.youtube;

export default selectYoutube;
