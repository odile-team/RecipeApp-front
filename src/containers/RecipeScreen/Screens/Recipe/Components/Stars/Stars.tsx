import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { StarsContainer } from './styles';
import { colors } from 'globalStyles/color';

const Stars = ({ stars }: { stars: number }): JSX.Element => {
  const starsDisplayed: number = Math.round(stars);

  return (
    <StarsContainer>
      {Array.from(Array(starsDisplayed), () => (
        <AntDesign name="star" size={18} color={colors.mainBlue} />
      ))}
      {Array.from(Array(5 - starsDisplayed), () => (
        <AntDesign name="staro" size={18} color={colors.mainBlue} />
      ))}
    </StarsContainer>
  );
};

export default Stars;
