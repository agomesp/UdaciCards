import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

const RouteConfigs = {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: "Decks",
    }
  },
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: 'black',
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const Tabs = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);


const TabsContainer = createAppContainer(Tabs)

export default function App() {
  return (
    <TabsContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
