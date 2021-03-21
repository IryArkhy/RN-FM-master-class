import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  FlatList,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../constants/Colors';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSwitchChange = useCallback((value, color) => {
    if (value) {
      setSelectedColors((oldColors) => [...oldColors, color]);
    } else {
      setSelectedColors((oldColors) =>
        oldColors.filter(
          (selectedColor) => selectedColor.colorName !== color.colorName,
        ),
      );
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please, enter a palette name');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please, enter at least 3 colors');
    } else {
      const newColorPalette = { paletteName: name, colors: selectedColors };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [name, navigation, selectedColors]);

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Name of the palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette name"
      />
      <FlatList
        data={COLORS}
        renderItem={({ item }) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={
                selectedColors.find(
                  (color) => color.colorName === item.colorName,
                )
                  ? item.hexCode
                  : '#f4f3f4'
              }
              ios_backgroundColor="#3e3e3e"
              value={
                !!selectedColors.find(
                  (color) => color.colorName === item.colorName,
                )
              }
              onValueChange={(selected) => handleSwitchChange(selected, item)}
            />
          </View>
        )}
        keyExtractor={(i) => i.colorName}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    borderRadius: 5,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  color: {
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default ColorPaletteModal;
