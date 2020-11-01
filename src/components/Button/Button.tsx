import React from 'react';

import { ButtonContainer, ButtonText } from './style';

const Button = ({
  text,
  onPress,
  testID,
}: {
  text: string;
  onPress: Function;
  testID?: string;
}): JSX.Element => {
  return (
    <ButtonContainer onPress={onPress} testID={testID}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
