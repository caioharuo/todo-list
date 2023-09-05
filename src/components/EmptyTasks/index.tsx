import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Feather name="clipboard" size={56} color={THEME.COLORS.GRAY[300]} />
      <View>
        <Text style={styles.emptyTasksTitle}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyTasksSubtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
