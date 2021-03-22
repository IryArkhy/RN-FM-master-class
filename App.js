import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './src/screens/ColorPalette';
import Home from './src/screens/Home';
import ColorPaletteModal from './src/screens/ColorPaletteModal';
import BottomTabNavigator from './src/navigation/TabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Dashboard' }}
      />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

// const App = () => {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator mode="modal">
//         <RootStack.Screen
//           name="Main"
//           component={MainStackScreen}
//           options={{ headerShown: false }}
//         />
//         <RootStack.Screen
//           name="ColorPaletteModal"
//           component={ColorPaletteModal}
//         />
//         {/* Add other  modal components here if needed */}
//       </RootStack.Navigator>
//       {/* <BottomTabNavigator /> */}
//     </NavigationContainer>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
