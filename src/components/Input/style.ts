// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';

export const InputContainer = styled.View`
  width: 84%;
  margin: 8%;
  margin-bottom: 0;
  padding: 3%;
  padding-left: 5%;
  padding-bottom: 4%;
  border-radius: 15px 0px 15px 15px;
  background: ${colors.white};
  box-shadow: 0px 0px 20px ${colors.shadowGrey};
`;

export const Placeholder = styled.Text`
  padding-bottom: 5%;
  font-size: 15px;
  font-weight: 500;
`;

export const ValueContainer = styled.View`
  flex-direction: row;
`;

export const ValueField = styled.TextInput`
  width: 80%;
  color: ${colors.grey};
`;

export const IconContainer = styled.TouchableOpacity`
  width: 20%;
  align-items: center;
`;
