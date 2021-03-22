import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  RootStackNavigator,
  ContactStackNavigator,
  SearchStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();
// https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={RootStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
