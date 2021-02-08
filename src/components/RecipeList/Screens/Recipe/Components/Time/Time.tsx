import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { TimeContainer, TimeText } from './styles';
import { colors } from 'globalStyles/color';

const Time = ({ time }: { time: number }): JSX.Element => {
  return (
    <TimeContainer>
      <AntDesign name="clockcircleo" size={17} color={colors.mainBlue} />
      <TimeText>{time} min</TimeText>
    </TimeContainer>
  );
};

export default Time;
