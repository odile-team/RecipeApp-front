import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { FullView, BackButtonContainer, GoBack, BackText } from './styles';

export const BackView = ({ onPress, children, color }) => (
  <FullView>
    <BackButtonContainer>
      <GoBack onPress={onPress}>
        <Ionicons name="ios-arrow-back" size={21} color={color} />
        <BackText color={color}>Retour</BackText>
      </GoBack>
    </BackButtonContainer>
    {children}
  </FullView>
);

export default BackView;
