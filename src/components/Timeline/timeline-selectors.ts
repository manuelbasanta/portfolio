import { RootState } from '../../store';
import { TimelineStep } from './timelime-types';

const selectSteps = () => (state:RootState): TimelineStep[] => state.timeline.steps;

export default selectSteps;
