import React from 'react';

import LikeButton from 'components/LikeButton/LikeButton';

import Categorie from '../Categorie/Categorie';

import { HeadContainer, MainHeadPart, CategoriesContainer, LikeContainer, Title } from './styles';

import { HeadProps } from './types';

const Head = ({ title, categories, isLiked, onLike }: HeadProps): JSX.Element => (
  <HeadContainer>
    <MainHeadPart>
      <Title>{title}</Title>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <Categorie category={category} key={index} />
        ))}
      </CategoriesContainer>
    </MainHeadPart>
    <LikeContainer>
      <LikeButton onPress={onLike} isLiked={isLiked} />
    </LikeContainer>
  </HeadContainer>
);

export default Head;
