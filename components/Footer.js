import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Visit Switzerland © 2026
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D52B1E',
    padding: 15,
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});