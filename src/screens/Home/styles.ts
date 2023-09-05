import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY['600'],
  },
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleAndCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createdTasksTitle: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.BLUE[500],
  },
  completedTasksTitle: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.PURPLE[500],
  },
  counter: {
    fontSize: THEME.FONT_SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.GRAY[200],
    backgroundColor: THEME.COLORS.GRAY[400],
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
  },
});
