import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: -27,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  input: {
    height: 54,
    flex: 1,
    padding: 16,
    backgroundColor: THEME.COLORS.GRAY[500],
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GRAY[100],
    borderRadius: 6,
  },
  button: {
    padding: 18,
    backgroundColor: THEME.COLORS.BLUE[500],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
