import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { StarsContainer } from './styles';
import { colors } from 'globalStyles/color';

const Stars = ({ stars }: { stars: number }): JSX.Element => {
  const starsDisplayed: number = Math.round(stars);

  return (
    <StarsContainer>
      {Array.from(Array(starsDisplayed), (_, index) => (
        <AntDesign key={index} name="star" size={18} color={colors.mainBlue} />
      ))}
      {Array.from(Array(5 - starsDisplayed), (_, index) => (
        <AntDesign key={index} name="staro" size={18} color={colors.mainBlue} />
      ))}
    </StarsContainer>
  );
};

export default Stars;
