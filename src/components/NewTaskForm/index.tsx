import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';

interface NewTaskFormProps {
  onCreateTask: (taskDescription: string) => void;
}

export function NewTaskForm({ onCreateTask }: NewTaskFormProps) {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  function handleCreateNewTask() {
    onCreateTask(newTaskDescription);
    setNewTaskDescription('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={newTaskDescription}
        onChangeText={setNewTaskDescription}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLORS.GRAY['300']}
        style={styles.input}
      />
      <TouchableOpacity
        disabled={!newTaskDescription}
        onPress={handleCreateNewTask}
        style={{
          ...styles.button,
          opacity: newTaskDescription ? 1 : 0.5,
        }}
      >
        <Feather name="plus-circle" size={16} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  );
}
