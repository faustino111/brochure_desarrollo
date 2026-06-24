import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

export default function PlacesSection({ searchText }) {

  const foods = [
    {
      id: '1',
      name: 'Fondue',
      description: 'Melted cheese served with pieces of bread.',
      image: require('../assets/fondue.jpeg'),
    },
    {
      id: '2',
      name: 'Raclette',
      description: 'Melted cheese traditionally served with potatoes.',
      image: require('../assets/raclette.jpeg'),
    },
    {
      id: '3',
      name: 'Rösti',
      description: 'A crispy potato dish popular throughout Switzerland.',
      image: require('../assets/rosti.jpeg'),
    },
    {
      id: '4',
      name: 'Swiss Chocolate',
      description: 'One of the most famous chocolates in the world.',
      image: require('../assets/chocolate.jpeg'),
    },
  ];

  const filteredFoods = foods.filter(food =>
  food.name.toLowerCase().includes(
    searchText.toLowerCase()
  )
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Traditional Food
      </Text>

      <FlatList
        data={filteredFoods}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={item.image}
              style={styles.image}
            />

            <Text style={styles.foodName}>
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
    marginBottom: 30,
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

  foodName: {
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