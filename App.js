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

export default function App() {

  const [selectedSection, setSelectedSection] = useState('home');
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Navbar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          searchText={searchText}
          setSearchText={setSearchText}
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