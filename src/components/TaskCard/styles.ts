import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY[500],
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY[400],
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: THEME.COLORS.BLUE[500],
  },
  task: {
    flex: 1,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GRAY[100],
    lineHeight: 20,
  },
  completedTask: {
    color: THEME.COLORS.GRAY[300],
    textDecorationLine: 'line-through',
  },
  removeTaskButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
