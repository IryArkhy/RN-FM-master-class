import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  // Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';

const Search = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Search by ID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
