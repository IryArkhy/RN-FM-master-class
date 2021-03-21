import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import ColorBox from '../ColorBox';

const FOODS = [
  { title: 'Healty', data: ['banana', 'apple'] },
  { title: 'Not Healthy', data: ['burger', 'pizza'] },
];

const ANIMALS = ['Cat', 'Dog', 'Fish', 'Hamster'];

const Boxes = ({ colors, paletteName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Here are some boxes of different colours
      </Text>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text>{paletteName}</Text>}
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
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  header: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Boxes;
