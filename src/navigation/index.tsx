import React from 'react';
import {
  NavigationContainer,
  createStaticNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {Text, View} from 'react-native';
const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);
const AppNavigator = () => <Navigation />;

const Helo = () => (
  <View>
    <Text>Hello</Text>
  </View>
);

export default AppNavigator;
