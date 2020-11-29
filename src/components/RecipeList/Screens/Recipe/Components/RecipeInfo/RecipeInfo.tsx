import React from 'react';

import FadeInEntrance from 'components/FadeInEntrance/FadeInEntrance';

import Time from '../Time/Time';
import NumberOfPart from '../NumberOfPart/NumberOfPart';
import { RecipeInfoContainer } from './styles';

import { RecipeInfoProps } from './types';

const RecipeInfo = ({ time, parts, position }: RecipeInfoProps): JSX.Element => (
  <FadeInEntrance position={position}>
    <RecipeInfoContainer>
      <Time time={time} />
      <NumberOfPart parts={parts} />
    </RecipeInfoContainer>
  </FadeInEntrance>
);

export default RecipeInfo;
