import { TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

export function NewTaskForm() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLORS.GRAY['300']}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Feather name="plus-circle" size={16} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  );
}
