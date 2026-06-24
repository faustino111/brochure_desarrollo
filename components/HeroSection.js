
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function HeroSection() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/alps.jpeg')}
        style={styles.image}
      />

      <Text style={styles.title}>
        Visit Switzerland
      </Text>

      <Text style={styles.subtitle}>
        Travel to the country with the best views in Europe
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },

  subtitle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});