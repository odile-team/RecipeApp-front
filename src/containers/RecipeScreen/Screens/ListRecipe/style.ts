// @ts-ignore
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';
import { percentOf } from 'utils/percentOf';
import { Background } from '../../../../components/FullScreenLayer/style';

export const getStyles = (height: number) =>
  StyleSheet.create({
    ScrollViewContainer: {
      height: percentOf(height, 80) - 15,
    },
  });

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ListCardsContainer = styled.View`
  width: 100%;
  height: 82%;
  flex-direction: row;
  flex-wrap: wrap;
`;
