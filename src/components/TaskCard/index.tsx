import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../../screens/Home';
import { THEME } from '../../theme';
import { Checkbox } from '../Checkbox';
import { styles } from './styles';

interface TaskCardProps {
  task: Task;
  onCheck: () => void;
  onRemove: () => void;
}

export function TaskCard({ task, onCheck, onRemove }: TaskCardProps) {
  return (
    <View style={styles.container}>
      <Checkbox checked={task.isCompleted} onChange={onCheck} />
      <Text style={[styles.task, task.isCompleted && styles.completedTask]}>
        {task.taskDescription}
      </Text>
      <TouchableOpacity onPress={onRemove} style={styles.removeTaskButton}>
        <Feather name="trash" size={16} color={THEME.COLORS.GRAY[300]} />
      </TouchableOpacity>
    </View>
  );
}
