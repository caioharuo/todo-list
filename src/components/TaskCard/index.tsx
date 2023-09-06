import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { styles } from './styles';
import { THEME } from '../../theme';

export function TaskCard() {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked((state) => !state);
  }

  return (
    <View style={styles.container}>
      <Checkbox checked={checked} onChange={handleCheck} />
      <Text style={[styles.task, checked && styles.completedTask]}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <TouchableOpacity style={styles.removeTaskButton}>
        <Feather name="trash" size={16} color={THEME.COLORS.GRAY[300]} />
      </TouchableOpacity>
    </View>
  );
}
