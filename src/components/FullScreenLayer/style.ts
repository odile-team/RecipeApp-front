// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';

export const FullScreenContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: absolute;
`;

export const Background = styled.View`
  background-color: ${colors.white};
  opacity: 0.8;
  height: 100%;
  width: 100%;
`;
