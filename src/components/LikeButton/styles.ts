// @ts-ignore
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';
import { colors } from 'globalStyles/color';

export const styles = StyleSheet.create({
  Lottie: {
    height: '100%',
    left: 2,
  },
});

export const LikeContainer = styled.View`
  flex-direction: row;
  height: 100%;
`;

export const ButtonContainer = styled.TouchableWithoutFeedback`
  height: 100%;
  width: 100%;
`;

export const LikedText = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  margin-left: 10px;
  color: ${colors.grey};
`;
