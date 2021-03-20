import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorBox from '../ColorBox';

const Boxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Here are some boxes of different colours
      </Text>
      <View>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Boxes;
