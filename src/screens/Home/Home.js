import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../../constants/Colors';
import PalettePreview from '../../components/PalettePreview';

// Teacher solution

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const fetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (response.ok) {
      const palettesRes = await response.json();
      setPalettes(palettesRes);
    }
  }, []);

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
