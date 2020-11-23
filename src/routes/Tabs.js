import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import Dictionary from '../pages/Dictionary';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
          borderTopColor: '#E4E6EA',
          borderTopWidth: 1
        },

        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },

        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },

        labelStyle: {
          fontFamily: 'Inter_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },

        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#E7F3FA',

        inactiveTintColor: '#98A4B5',
        activeTintColor: '#2D8EFF',
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Tela Inicial',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="home"
              size={size}
              color={focused ? '#2D8EFF' : color}
            />
          ),
        }}
      />
      <Screen
        name="Dictionary"
        component={Dictionary}
        options={{
          tabBarLabel: 'Dicionário',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="book-open"
              size={size}
              color={focused ? '#2D8EFF' : color}
            />
          ),
        }}
      />
    </Navigator>
  );
}