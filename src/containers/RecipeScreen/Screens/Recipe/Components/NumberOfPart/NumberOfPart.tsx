import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NumberOfPartContainer, NumberOfPartText } from './styles';
import { colors } from 'globalStyles/color';

const NumberOfPart = ({ parts }: { parts: number }): JSX.Element => {
  const plural = parts > 1 ? 's' : '';

  return (
    <NumberOfPartContainer>
      <MaterialCommunityIcons name="silverware-fork-knife" size={17} color={colors.mainBlue} />
      <NumberOfPartText>
        Pour {parts} personne{plural}
      </NumberOfPartText>
    </NumberOfPartContainer>
  );
};

export default NumberOfPart;
