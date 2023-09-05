import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';

interface CheckboxProps {
  onChange: () => void;
  checked: boolean;
}

export function Checkbox({ onChange, checked }: CheckboxProps) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}
    >
      {checked && <Feather name="check" size={14} color={THEME.COLORS.WHITE} />}
    </Pressable>
  );
}
