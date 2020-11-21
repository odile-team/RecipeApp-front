import { StyleSheet } from 'react-native';
import { colors } from 'globalStyles/color';

export const styles = StyleSheet.create({
  ContainerStyle: {
    alignItems: 'center',
  },
  CategoriesTitleText: {
    textAlign: 'center',
    display: 'flex',
    overflow: 'hidden',
    fontWeight: '500',
  },
  borderStyle: {
    borderColor: colors.mainBlue,
    borderRadius: 30,
    marginTop: 10,
  },
});
