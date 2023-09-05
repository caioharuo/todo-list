import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderColor: THEME.COLORS.BLUE[500],
  },
  checkboxChecked: {
    borderColor: THEME.COLORS.PURPLE[600],
    backgroundColor: THEME.COLORS.PURPLE[600],
  },
});
