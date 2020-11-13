import React from 'react';

import { IngredientContainer, IngredientText, Quantity } from './styles';

const Ingredient = ({ quantity, unit, name }): JSX.Element => {
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
