
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function FactsSection() {

  const swissData = [
    { id: '1', info: 'Capital: Bern' },
    { id: '2', info: 'Population: 8.9 million' },
    { id: '3', info: 'Currency: Swiss Franc' },
    { id: '4', info: 'Languages: German, French, Italian and Romansh' },
    { id: '5', info: 'Highest Mountain: Dufourspitze' },
    { id: '6', info: 'Famous for: Alps, Watches and Chocolate' },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Switzerland Facts
      </Text>

      <FlatList
        data={swissData}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.info}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D52B1E',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },

  itemText: {
    color: 'white',
  },
});