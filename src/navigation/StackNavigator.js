import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import Search from '../screens/Search';
import ColorPalette from '../screens/ColorPalette';
import ColorPaletteModal from '../screens/ColorPaletteModal';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </Stack.Navigator>
  );
};

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ColorPaletteModal"
        component={ColorPaletteModal}
      />
      {/* Add other  modal components here if needed */}
    </RootStack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contacts} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Search} />
    </Stack.Navigator>
  );
};

export {
  RootStackNavigator,
  MainStackScreen,
  ContactStackNavigator,
  SearchStackNavigator,
};
