import React, { useContext } from 'react';

import LikeButton from 'components/LikeButton/LikeButton';
import CardsPicture from '../CardsPicture/CardsPicture';
import Description from '../Description/Description';

import { CardsContainer, BottomCardContainer, LikeContainer, DescContainer } from './style';
import { Context } from '../../ListRecipeScreen';
import { RecipeCardsProps } from './types';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';

const RecipeCards = ({ onPress, index, onNavigate }: RecipeCardsProps): JSX.Element => {
  const contextValues = useContext(Context);
  const { uri, isLiked, title } = contextValues[index];

  const height = Dimensions.get('window').height;

  const press = () => {
    onPress(index);
  };

  const navigate = () => {
    onNavigate(index, {
      title: title,
      uri: uri,
      isLiked: isLiked,
      index: index,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={navigate}>
      <CardsContainer height={height}>
        <CardsPicture uri={uri} index={index} />
        <BottomCardContainer>
          <DescContainer>
            <Description index={index} />
          </DescContainer>
          <LikeContainer>
            <LikeButton isLiked={isLiked} onPress={press} />
          </LikeContainer>
        </BottomCardContainer>
      </CardsContainer>
    </TouchableWithoutFeedback>
  );
};

export default RecipeCards;
