import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import ColorBox from '../ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const FOODS = [
  { title: 'Healty', data: ['banana', 'apple'] },
  { title: 'Not Healthy', data: ['burger', 'pizza'] },
];

const ANIMALS = ['Cat', 'Dog', 'Fish', 'Hamster'];

const Boxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Here are some boxes of different colours
      </Text>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text>Solariazide</Text>}
      />
      <FlatList
        data={ANIMALS}
        keyExtractor={(i) => i}
        renderItem={(data) => <Text>{data.item}</Text>}
        ListEmptyComponent={<Text>List is empty</Text>}
        ListFooterComponent={<Text>List Footer</Text>}
        ListHeaderComponent={<Text>List Header</Text>}
      />
      <SectionList
        sections={FOODS}
        keyExtractor={(i) => i}
        renderItem={(data) => <Text>{data.item}</Text>}
        renderScrollHeader={({ section }) => <Text>{section.title}</Text>}
      />
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
