import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Step from './components/Step';
import selectSteps from './timeline-selectors';

const Timeline: FC = () => {
  const steps = useSelector(selectSteps());
  return (
    <div className='timeline'>
      {steps.map((step) => (
        <Step
          key={`timeline_step_${step.header}`}
          header={step.header}
          content={step.content}
          title={step.title}
        />
      ))}
    </div>
  );
};

export default Timeline;
