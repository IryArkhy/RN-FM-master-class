import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Boxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Here are some boxes of different colours
      </Text>
      <View>
        <View style={[styles.viewCyan, styles.viewShared]}>
          <Text style={styles.viewText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.viewBlue, styles.viewShared]}>
          <Text style={styles.viewText}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.viewMagenta, styles.viewShared]}>
          <Text style={styles.viewText}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.viewOrange, styles.viewShared]}>
          <Text style={styles.viewText}>Orange: #cb4b16</Text>
        </View>
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
  viewCyan: {
    backgroundColor: '#2aa198',
  },
  viewBlue: {
    backgroundColor: '#268bd2',
  },
  viewMagenta: {
    backgroundColor: '#d33682',
  },
  viewOrange: {
    backgroundColor: '#cb4b16',
  },
  viewShared: {
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  viewText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default Boxes;
