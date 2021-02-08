import React from 'react';

import FadeInEntrance from 'components/FadeInEntrance/FadeInEntrance';

import Steps from '../Steps/Steps';

import { SubContainer, SubTitle } from '../../styles';

import { RecipeStepsProps } from './types';

const RecipeSteps = ({ steps, position }: RecipeStepsProps): JSX.Element => (
  <FadeInEntrance position={position}>
    <SubContainer>
      <SubTitle>ÉTAPES DE PREPARATION</SubTitle>
      {steps.map((step, index) => (
        <Steps step={step.step} order={step.order} key={index} />
      ))}
    </SubContainer>
  </FadeInEntrance>
);

export default RecipeSteps;
