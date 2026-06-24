
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

export default function PlacesSection({ searchText }) {

  const places = [
    {
      id: '1',
      name: 'Matterhorn',
      description: 'One of the most famous mountains in the world.',
      image: require('../assets/matterhorn.jpeg'),
    },
    {
      id: '2',
      name: 'Lake Geneva',
      description: 'A beautiful lake shared between Switzerland and France.',
      image: require('../assets/lake-geneva.jpeg'),
    },
    {
      id: '3',
      name: 'Jungfraujoch',
      description: 'Known as the Top of Europe because of its altitude.',
      image: require('../assets/jungfraujoch.jpeg'),
    },
    {
      id: '4',
      name: 'Rhine Falls',
      description: 'The largest waterfall in Europe.',
      image: require('../assets/rhine-falls.jpeg'),
    },
  ];

  const filteredPlaces = places.filter(place =>
  place.name.toLowerCase().includes(
    searchText.toLowerCase()
  )
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Places to Visit
      </Text>

      <FlatList
        data={filteredPlaces}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={item.image}
              style={styles.image}
            />

            <Text style={styles.placeName}>
              {item.name}
            </Text>

            <Text style={styles.description}>
              {item.description}
            </Text>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#D52B1E',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  placeName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    color: 'white',
    fontSize: 15,
  },
});