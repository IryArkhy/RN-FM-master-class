import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../../constants/Colors';
import ColorsPreview from '../../components/ColorsPreview';
import PalettePreview from '../../components/PalettePreview';

// My solution
// const Home = ({ navigation }) => {
//   const handlePress = (screen, options) => {
//     navigation.navigate(screen, options);
//   };
//   return (
//     <View style={styles.screenWrapper}>
//       <ColorsPreview
//         colors={SOLARIZED}
//         paletteName="Solarized"
//         onNavigate={handlePress}
//       />
//       <ColorsPreview
//         colors={RAINBOW}
//         paletteName="Rainbow"
//         onNavigate={handlePress}
//       />
//       <ColorsPreview
//         colors={FRONTEND_MASTERS}
//         paletteName="Frontend Master"
//         onNavigate={handlePress}
//       />
//     </View>
//   );
// };

// Teacher solution

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate('ColorPalette', item);
  };
  return (
    <View style={styles.screenWrapper}>
      <FlatList
        style={styles.list}
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview onPress={() => handlePress(item)} palette={item} />
        )}
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
