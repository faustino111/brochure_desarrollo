import React, { useState } from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Navbar({
  setSelectedSection,
  searchText,
  setSearchText,
}) {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>

        <Pressable
          onPress={() => setMenuVisible(!menuVisible)}
        >
          <Ionicons
            name="menu"
            size={30}
            color="white"
          />
        </Pressable>

        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <Ionicons
          name="search"
          size={24}
          color="white"
        />

      </View>

      {
        menuVisible && (
          <View style={styles.dropdownMenu}>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setSelectedSection('home');
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuText}>
                Home
              </Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setSelectedSection('places');
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuText}>
                Places
              </Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setSelectedSection('food');
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuText}>
                Food
              </Text>
            </Pressable>

          </View>
        )
      }
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
});