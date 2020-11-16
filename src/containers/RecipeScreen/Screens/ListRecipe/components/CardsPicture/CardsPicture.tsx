import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';

import { CardPictureContainer, PictureContainer } from './style';

const CardsPicture = ({ uri, index }) => {
  return (
    <CardPictureContainer>
      <SharedElement id={`image_${index}`}>
        <PictureContainer
          source={{
            uri: uri,
          }}
        />
      </SharedElement>
    </CardPictureContainer>
  );
};

export default CardsPicture;
