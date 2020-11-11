import React from 'react';

import { CardPictureContainer, PictureContainer } from './style';

const CardsPicture = ({ uri }) => {
  return (
    <CardPictureContainer>
      <PictureContainer
        source={{
          uri: uri,
        }}
      />
    </CardPictureContainer>
  );
};

export default CardsPicture;
