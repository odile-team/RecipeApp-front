import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { LikeNumberContainer, LikeNumberText } from './styles';
import { colors } from 'globalStyles/color';

const LikeNumber = ({ like }: { like: number }): JSX.Element => {
  return (
    <LikeNumberContainer>
      <AntDesign name="hearto" size={17} color={colors.grey} />
      <LikeNumberText>{like}</LikeNumberText>
    </LikeNumberContainer>
  );
};

export default LikeNumber;
