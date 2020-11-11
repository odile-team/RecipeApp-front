import React from 'react';

import { IngredientContainer, IngredientText } from './styles';

const Ingredient = ({ ingredient }): JSX.Element => {
  return (
    <IngredientContainer>
      <IngredientText>{ingredient}</IngredientText>
    </IngredientContainer>
  );
};

export default Ingredient;
