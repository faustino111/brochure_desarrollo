import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function MapSection() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Location in Europe
      </Text>

      <Image
        source={require('../assets/europe-map.jpeg')}
        style={styles.image}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D52B1E',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
});