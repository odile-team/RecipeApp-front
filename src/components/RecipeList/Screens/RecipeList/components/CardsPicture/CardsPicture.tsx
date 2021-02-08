import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';

import { CardPictureContainer, PictureContainer } from './style';
import { CardsPictureProps } from './types';

const CardsPicture = ({ uri, index }: CardsPictureProps): JSX.Element => {
  return (
    <CardPictureContainer>
      <SharedElement id={`image_${index}`}>
        <PictureContainer
          source={{
            uri,
          }}
        />
      </SharedElement>
    </CardPictureContainer>
  );
};

export default CardsPicture;
