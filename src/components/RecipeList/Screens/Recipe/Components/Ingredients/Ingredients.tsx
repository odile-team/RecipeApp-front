import React from 'react';

import FadeInEntrance from 'components/FadeInEntrance/FadeInEntrance';

import Ingredient from '../Ingredient/Ingredient';

import { SubContainer, SubTitle } from '../../styles';

import { IngredientsProps } from './types';

const Ingredients = ({ ingredients, position }: IngredientsProps): JSX.Element => (
  <FadeInEntrance position={position}>
    <SubContainer>
      <SubTitle>INGREDIENTS</SubTitle>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          quantity={ingredient.quantity}
          unit={ingredient.unit}
          name={ingredient.name}
          key={index}
        />
      ))}
    </SubContainer>
  </FadeInEntrance>
);

export default Ingredients;
