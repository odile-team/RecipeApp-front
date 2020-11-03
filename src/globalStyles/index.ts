// @ts-ignore
import styled from '@emotion/native';
import { colors } from './color';

export const CenteredContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const SafeAreaView = styled.View`
  padding-top: 15%;
  height: 100%;
  width: 100%;
  background-color: ${colors.lightgrey};
`;
