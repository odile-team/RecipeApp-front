// @ts-ignore
import { StyleSheet } from 'react-native';
import { percentOf } from 'utils/percentOf';

export const getStyles = (height: number) =>
  StyleSheet.create({
    ScrollViewContainer: {
      height: percentOf(height, 75),
      paddingBottom: percentOf(height, 10),
    },
    titleContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      height: percentOf(height, 5),
    },
    recipeListContainer: {
      height: percentOf(height, 100),
    },
  });
