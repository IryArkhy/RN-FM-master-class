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

const Contacts = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Contacts View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Contacts;
