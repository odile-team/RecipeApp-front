import { StyleSheet } from 'react-native';
import { percentOf } from 'utils/percentOf';

// TODO: types of styleSheet
export const styles = (height: number): any =>
  StyleSheet.create({
    navigator: {
      borderRadius: 13,
      height: percentOf(height, 10),
      borderColor: 'red',
      backgroundColor: 'white',
      borderTopWidth: 0,
      elevation: 0,
    },
  });
