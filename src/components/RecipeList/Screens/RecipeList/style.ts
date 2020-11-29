// @ts-ignore
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';
import { percentOf } from 'utils/percentOf';

export const getStyles = (height: number) =>
  StyleSheet.create({
    ScrollViewContainer: {
      backgroundColor: 'white',
    },
  });

export const ListCardsContainer = styled.View`
  width: 100%;
  height: 82%;
  flex-direction: row;
  flex-wrap: wrap;
`;
