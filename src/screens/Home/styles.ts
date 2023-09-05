import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY['600'],
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontSize: 40,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
