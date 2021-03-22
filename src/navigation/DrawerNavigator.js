import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { ContactStackNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      // screenOptions={({ route }) => {}}
      drawerStyle={isLargeScreen ? null : { width: '80%' }}
      openByDefault
    >
      <Drawer.Screen name="Dashboard" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: 300,
  },
});

export default DrawerNavigator;
