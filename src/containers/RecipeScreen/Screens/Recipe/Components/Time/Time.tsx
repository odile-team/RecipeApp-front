import React from 'react';

import { TimeContainer } from './styles';

const Time = ({ time }): JSX.Element => {
  return <TimeContainer>{time} minutes</TimeContainer>;
};

export default Time;
