import React from 'react';

import { StepsContainer, StepTitle, StepDesc } from './styles';

const Steps = ({ step, order }): JSX.Element => {
  return (
    <StepsContainer>
      <StepTitle>Step {order}</StepTitle>
      <StepDesc>{step}</StepDesc>
    </StepsContainer>
  );
};

export default Steps;
