import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// My solution
const ColorsPreview = ({ colors, paletteName, onNavigate }) => {
  const handleNavigate = () =>
    onNavigate('ColorPalette', { colors, paletteName });
  return (
    <View>
      <TouchableOpacity onPress={handleNavigate}>
        <FlatList
          data={colors}
          keyExtractor={(item) => item.colorName}
          horizontal
          renderItem={({ item }) => (
            <View
              style={[styles.colorItem, { backgroundColor: item.hexCode }]}
            />
          )}
          ListHeaderComponent={
            <Text style={styles.heading}>{paletteName}</Text>
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  colorItem: {
    width: 20,
    height: 20,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorsPreview;
