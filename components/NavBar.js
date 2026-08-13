import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NavBar({
  searchText,
  setSearchText,
  selectedSection,
  setSelectedSection,
  suggestions = [],
}) {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => setMenuVisible(!menuVisible)}>
          <Ionicons name="menu" size={30} color="white" />
        </Pressable>

        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
        />

        <Ionicons name="search" size={24} color="white" />

  
        {suggestions.length > 0 && (
          <View style={styles.suggestions}>
            {suggestions.map((suggestion) => (
              <Pressable
                key={suggestion}
                style={styles.suggestionItem}
                onPress={() => setSearchText(suggestion)}
              >
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>


      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <Pressable
            style={styles.menuItem}
            onPress={() => {
              setSelectedSection('home');
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Home</Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => {
              setSelectedSection('places');
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Places</Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => {
              setSelectedSection('food');
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Food</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D52B1E',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 10,
    position: 'relative',
    zIndex: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 15,
  },
  dropdownMenu: {
    backgroundColor: '#D52B1E',
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff40',
  },
  menuText: {
    color: 'white',
    fontWeight: 'bold',
  },
  suggestions: {
    position: 'absolute',
    top: 60,
    left: 55,
    right: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 1000,
    elevation: 5,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestionText: {
    color: '#333',
  },
});