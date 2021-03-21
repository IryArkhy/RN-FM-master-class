import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
const PalettePreview = ({ palette, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        data={palette.colors.slice(0, 5)}
        horizontal
        style={styles.list}
        keyExtractor={(i) => i.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: { marginBottom: 10 },
});

export default PalettePreview;
