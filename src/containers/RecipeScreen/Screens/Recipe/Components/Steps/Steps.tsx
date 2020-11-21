import React from 'react';

import { StepsContainer, StepTitle, StepDesc } from './styles';

import { RecipeStepType } from '../RecipeSteps/types';

const Steps = ({ step, order }: RecipeStepType): JSX.Element => {
  return (
    <StepsContainer>
      <StepTitle>Étape {order}</StepTitle>
      <StepDesc>{step}</StepDesc>
    </StepsContainer>
  );
};

export default Steps;
