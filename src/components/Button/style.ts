// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%
    margin: 8%;
    padding: 5%;
    justify-content: center
    align-items: center;
    border-radius: 15px 0px 15px 15px;
    background: ${colors.mainBlue};
    box-shadow: 0px 0px 20px ${colors.shadowGrey};
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 600;
`;
