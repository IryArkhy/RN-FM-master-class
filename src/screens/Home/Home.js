import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  // Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import PalettePreview from '../../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  console.log({ newColorPalette });

  const fetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (response.ok) {
      const palettesRes = await response.json();
      setPalettes(palettesRes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchPalettes();

    //the network request is so quick, that you need to use timeout for better UX
    // so that loader is visible a little bit longer
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchPalettes]);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  useEffect(() => {
    if (newColorPalette) {
      setPalettes((oldPalettes) => [newColorPalette, ...oldPalettes]);
    }
  }, [newColorPalette, setPalettes]);

  const handlePress = (item) => {
    navigation.navigate('ColorPalette', item);
  };
  return (
    <View style={styles.screenWrapper}>
      <FlatList
        style={styles.list}
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview onPress={() => handlePress(item)} palette={item} />
        )}
        ListEmptyComponent={<Text>There is no palette available...</Text>}
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.buttonModal}
            onPress={() => navigation.navigate('ColorPaletteModal')}
          >
            <Text style={styles.buttonText}>Open Modal</Text>
          </TouchableOpacity>
        }
        // refreshControl={
        //   <RefreshControl refreshing={true} onRefresh={() => {}} />
        // } use this prop to pass your custom loader

        // use this props if you're okay with native loader
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: 'white',
  },
  list: {
    padding: 10,
  },
  buttonModal: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
