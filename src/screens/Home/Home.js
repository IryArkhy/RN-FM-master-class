import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';

import PalettePreview from '../../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

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
});

export default Home;
