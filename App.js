import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Boxes from './src/components/Boxes';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <View style={[styles.container, styles.pink]}>
        <Text>Hello world!</Text>
      </View> */}
      <Boxes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  container: {
    paddingVertical: 10, // both for margin and paddings
    paddingHorizontal: 30, // native styles don't have any units, but it corresponds to the density-independant pixels
    // all positioning is made with flexbox
    alignItems: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
