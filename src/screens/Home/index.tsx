import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
  );
}