import React from 'react';
import { SingleCategoryProps } from './types';

import {
  CategoryContainer,
  CategoryTitle,
  CategoryPicture,
  CategoryPictureContainer,
  CategoryTitleContainer,
} from './styles';

const SingleCategory = ({ title, uri, onNavigate }: SingleCategoryProps): JSX.Element => {
  return (
    <CategoryContainer onPress={() => onNavigate()}>
      <CategoryPictureContainer>
        <CategoryPicture blurRadius={4} source={{ uri }} />
      </CategoryPictureContainer>
      <CategoryTitleContainer>
        <CategoryTitle>{title}</CategoryTitle>
      </CategoryTitleContainer>
    </CategoryContainer>
  );
};

export default SingleCategory;
