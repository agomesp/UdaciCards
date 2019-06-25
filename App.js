import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import ViewDeck from './components/ViewDeck'

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

const MainNavigator = createStackNavigator({
  home: {
    screen: TabsContainer,
    navigationOptions: {
      header: null,
    },
  },
  ViewDeck: {
    screen: ViewDeck,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      },
    }),
  },
});

MainNavigatorContainer = createAppContainer(MainNavigator)

export default function App() {
  return (
    <MainNavigatorContainer />
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
