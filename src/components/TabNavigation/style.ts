// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';
import { StyleSheet } from 'react-native';

export const Container = styled.TouchableWithoutFeedback``;

export const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightgrey,
    borderRadius: 100,
    margin: 6,
  },
});

export const Icon = styled.View`
  justify-content: center;
  height: 24px;
  width: 24px;
  flex: 2;
  align-items: center;
`;

export const Label = styled.Text`
  flex: 3;
  color: ${colors.mainBlue};
  font-weight: 600;
  font-size: ${({ fontSize }: { fontSize: string }): string => fontSize};
  display: flex;
  overflow: hidden;
`;
