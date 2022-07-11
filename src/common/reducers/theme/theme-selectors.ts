import { RootState } from '../../../store';
import { Theme } from './theme-types';

const selectTheme = () => (state:RootState): Theme => state.theme.type;

export default selectTheme;
