import React from 'react';
import LikeButton from 'components/LikeButton/LikeButton';
import CardsPicture from '../CardsPicture/CardsPicture';
import Description from '../Description/Description';

import { CardsContainer, BottomCardContainer, LikeContainer } from './style';

const RecipeCards = ({ isLiked, onPress }): JSX.Element => {
  return (
    <CardsContainer>
      <CardsPicture />
      <BottomCardContainer>
        <LikeContainer>
          <LikeButton isLiked={isLiked} onPress={onPress} />
        </LikeContainer>
        <Description title="Sliced beef" desc="Meat" />
      </BottomCardContainer>
    </CardsContainer>
  );
};

export default RecipeCards;
