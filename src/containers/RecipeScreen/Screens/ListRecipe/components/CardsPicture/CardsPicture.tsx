import React from 'react';

import LikeButton from 'components/LikeButton/LikeButton';

import { CardPictureContainer, PictureContainer, LikeContainer } from './style';

const CardsPicture = ({}) => {
  return (
    <CardPictureContainer>
      <PictureContainer />
      <LikeContainer>
        <LikeButton />
      </LikeContainer>
    </CardPictureContainer>
  );
};

export default CardsPicture;
