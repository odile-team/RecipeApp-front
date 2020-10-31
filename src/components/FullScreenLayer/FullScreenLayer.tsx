import React from 'react';
import { Background, FullScreenContainer } from './style';

const FullScreenLayer = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <FullScreenContainer>
      <Background />
      {children}
    </FullScreenContainer>
  );
};

export default FullScreenLayer;
