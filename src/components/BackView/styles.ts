// @ts-ignore
import styled from '@emotion/native';

export const FullView = styled.View``;

export const BackButtonContainer = styled.View`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 100;
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
`;

export const BackText = styled.Text`
  padding-left: 7px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: 17px;
`;
