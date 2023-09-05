import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY[400],
    paddingHorizontal: 20,
    paddingVertical: 48,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTasksTitle: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.GRAY[300],
    textAlign: 'center',
  },
  emptyTasksSubtitle: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.GRAY[300],
    textAlign: 'center',
  },
});
