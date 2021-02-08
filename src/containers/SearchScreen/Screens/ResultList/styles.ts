import { StyleSheet } from 'react-native';
import { percentOf } from 'utils/percentOf';

export const getStyles = (height: number) =>
  StyleSheet.create({
    resultContainer: {
      width: '100%',
      height: percentOf(height, 100),
      paddingTop: percentOf(height, 10),
      backgroundColor: 'white',
    },
  });
