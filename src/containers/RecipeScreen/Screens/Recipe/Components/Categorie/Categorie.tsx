import React from 'react';

import { CategorieContainer, CategorieText } from './styles';

const Categorie = ({ category }: { category: string }): JSX.Element => {
  return (
    <CategorieContainer>
      <CategorieText>{category}</CategorieText>
    </CategorieContainer>
  );
};

export default Categorie;
