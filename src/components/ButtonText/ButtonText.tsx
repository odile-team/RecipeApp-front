import React from 'react';

import { ButtonContainer, TextContainer } from './style';

const ButtonText = ({
  onPress,
  text,
  testID,
}: {
  onPress: Function;
  text: string;
  testID?: string;
}): JSX.Element => {
  return (
    <ButtonContainer onPress={onPress} testID={testID}>
      <TextContainer>{text}</TextContainer>
    </ButtonContainer>
  );
};

export default ButtonText;
