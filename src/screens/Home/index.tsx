import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Header } from '../../components/Header';
import { NewTaskForm } from '../../components/NewTaskForm';
import { TaskCard } from '../../components/TaskCard';
import { styles } from './styles';
import { EmptyTasks } from '../../components/EmptyTasks';

export type Task = {
  taskDescription: string;
  isCompleted: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(taskDescription: string) {
    const newTask = {
      taskDescription,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleToggleCompleteTask(taskIndex: number) {
    const updatedTasks = [...tasks];

    updatedTasks[taskIndex].isCompleted = !updatedTasks[taskIndex].isCompleted;

    setTasks(updatedTasks);
  }

  function handleRemoveTask(taskIndex: number) {
    const taskToRemove = tasks[taskIndex];
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);

    setTasks(updatedTasks);
  }

  const completedTasks = tasks.reduce((amount, { isCompleted }) => {
    if (isCompleted) {
      amount++;
    }

    return amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Header />

      <View style={{ marginHorizontal: 24 }}>
        <NewTaskForm onCreateTask={handleCreateTask} />

        <View style={{ gap: 20 }}>
          <View style={styles.countersContainer}>
            <View style={styles.titleAndCounterContainer}>
              <Text style={styles.createdTasksTitle}>Criadas</Text>
              <Text style={styles.counter}>{tasks.length}</Text>
            </View>
            <View style={styles.titleAndCounterContainer}>
              <Text style={styles.completedTasksTitle}>Concluídas</Text>
              <Text style={styles.counter}>{completedTasks}</Text>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ gap: 8 }}>
            {tasks.length === 0 ? (
              <EmptyTasks />
            ) : (
              tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task}
                  onCheck={() => handleToggleCompleteTask(index)}
                  onRemove={() => handleRemoveTask(index)}
                />
              ))
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
