import { Text, View } from 'react-native';

import { Header } from '../../components/Header';
import { NewTaskForm } from '../../components/NewTaskForm';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={{ marginHorizontal: 24 }}>
        <NewTaskForm />

        <View style={styles.countersContainer}>
          <View style={styles.titleAndCounterContainer}>
            <Text style={styles.createdTasksTitle}>Criadas</Text>
            <Text style={styles.counter}>0</Text>
          </View>
          <View style={styles.titleAndCounterContainer}>
            <Text style={styles.completedTasksTitle}>Concluídas</Text>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
