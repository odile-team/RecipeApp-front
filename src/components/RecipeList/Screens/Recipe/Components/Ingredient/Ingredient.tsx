import React from 'react';

import { IngredientContainer, IngredientText, Quantity } from './styles';

import { IngredientsType } from '../Ingredients/types';

const Ingredient = ({ quantity, unit, name }: IngredientsType): JSX.Element => {
  return (
    <IngredientContainer>
      <IngredientText>
        <Quantity>{quantity}</Quantity> {unit !== 'sans unité' ? unit + ' de ' : ''}
        {name}
      </IngredientText>
    </IngredientContainer>
  );
};

export default Ingredient;
