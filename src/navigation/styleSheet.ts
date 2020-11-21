import { StyleSheet } from 'react-native';
import { percentOf } from 'utils/percentOf';

// TODO: types of styleSheet
// TODO: essayer d'arrondir les angles du navigator
export const styles = (height: number): any =>
  StyleSheet.create({
    navigator: {
      borderRadius: 13,
      height: percentOf(height, 10),
      backgroundColor: 'white',
      borderTopWidth: 0,
      elevation: 0,
      width: '100%',
    },
  });
