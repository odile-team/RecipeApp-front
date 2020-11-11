import React from 'react';

import { CategorieContainer } from './styles';

const Categorie = ({ category }): JSX.Element => {
  return <CategorieContainer>{category}</CategorieContainer>;
};

export default Categorie;
