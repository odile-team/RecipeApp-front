import React from 'react';

import { ButtonContainer, TextContainer } from './style';

const ButtonText = ({ onPress, text }: { onPress: Function; text: string }): JSX.Element => {
  return (
    <ButtonContainer onPress={onPress}>
      <TextContainer>{text}</TextContainer>
    </ButtonContainer>
  );
};

export default ButtonText;
