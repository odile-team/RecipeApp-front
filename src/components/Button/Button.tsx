import React from 'react';

import { ButtonContainer, ButtonText } from './style';

const Button = ({ text, onPress }: { text: string; onPress: Function }): JSX.Element => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
