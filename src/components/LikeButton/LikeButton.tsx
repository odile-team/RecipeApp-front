import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { LikeContainer } from './styles';

const LikeButton = ({}) => {
  return (
    <LikeContainer>
      <FontAwesome name="heart-o" size={24} color="white" />
    </LikeContainer>
  );
};

export default LikeButton;
