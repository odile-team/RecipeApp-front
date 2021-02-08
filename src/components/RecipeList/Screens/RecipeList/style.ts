// @ts-ignore
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';
export const getStyles = (): any =>
  StyleSheet.create({
    ScrollViewContainer: {
      backgroundColor: 'white',
      height: '80%',
    },
  });

export const ListCardsContainer = styled.View`
  width: 100%;
  height: 82%;
  flex-direction: row;
  flex-wrap: wrap;
`;
