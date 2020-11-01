// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';

export const LoginContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.mainBlue};
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: 15%;
  padding-bottom: 0;
  font-size: 40px;
`;

export const BottomText = styled.View`
  position: absolute;
  bottom: 6%;
  width: 100%;
  align-items: center;
  margin: auto;
`;
