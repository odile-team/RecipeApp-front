// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';

export const CardsContainer = styled.View`
  height: ${(props) => (props.height * 0.3).toString()};
  width: 46%;
  background: white;
  padding-bottom: 15px;
  margin: 2%;
  border-radius: 30px;
  box-shadow: 0px 0px 5px ${colors.shadowGrey};
`;

export const BottomCardContainer = styled.View`
  margin-top: 8%;
  width: 100%;
  height: 30%;
  border-radius: 30px;
  flex-direction: row;
`;

export const DescContainer = styled.View`
  width: 70%;
`;

export const LikeContainer = styled.View`
  height: 50px;
  width: 20%;
`;
