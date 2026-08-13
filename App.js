import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FactsSection from './components/FactsSEction';
import MapSection from './components/MapSection';
import PlacesSection from './components/PlaceSection';
import FoodSection from './components/Foodsection';
import Footer from './components/Footer';

import { places, foods } from './data/data';

export default function App() {

  const [selectedSection, setSelectedSection] = useState('home');
  const [previousSection, setPreviousSection] = useState('home');
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true); // 👈 Nuevo estado para controlar la visibilidad

  // 1. Función para cambiar sección desde el menú
  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setPreviousSection(section);
    setSearchText('');
    setShowSuggestions(false);
  };

  // 2. Función de búsqueda
  const handleSearch = (text) => {
    setSearchText(text);
    setShowSuggestions(true); // 👈 Mostramos sugerencias mientras escribe

    if (text.trim() === '') {
      setSelectedSection(previousSection);
      return;
    }

    const search = text.toLowerCase();

    const placeFound = places.some(
      (place) =>
        place.name.toLowerCase().includes(search) ||
        place.description.toLowerCase().includes(search)
    );

    const foodFound = foods.some(
      (food) =>
        food.name.toLowerCase().includes(search) ||
        food.description.toLowerCase().includes(search)
    );

    if (placeFound) {
      setSelectedSection('places');
    } else if (foodFound) {
      setSelectedSection('food');
    }
  };


  const suggestions = searchText.trim()
      ? [
          ...places.map(place => place.name),
          ...foods.map(food => food.name),
        ].filter(item => {
          const itemLower = item.toLowerCase();
          const searchLower = searchText.toLowerCase().trim();

        return itemLower.includes(searchLower) && itemLower !== searchLower;
      })
    : [];


  const handleSelectSuggestion = (suggestion) => {
    handleSearch(suggestion);
    setShowSuggestions(false); 
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Navbar
          selectedSection={selectedSection}
          setSelectedSection={handleSectionChange} 
          searchText={searchText}
          setSearchText={handleSearch}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion} 
          onHideSuggestions={() => setShowSuggestions(false)}
        />

        <ScrollView>

          {selectedSection === 'home' && (
            <>
              <HeroSection />
              <FactsSection />
              <MapSection />
            </>
          )}

          {selectedSection === 'places' && (
            <PlacesSection searchText={searchText} />
          )}

          {selectedSection === 'food' && (
            <FoodSection searchText={searchText} />
          )}

        </ScrollView>

        <Footer />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3E7',
  },
});