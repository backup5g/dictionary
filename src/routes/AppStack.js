import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';
import Details from '../pages/Details';
import Tabs from './Tabs';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Tabs" component={Tabs} />
        <Screen name="Search" component={Search} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}