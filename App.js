import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Decks from './components/Decks'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import ViewDeck from './components/ViewDeck'
import Questions from './components/Questions'
import NewDeck from './components/NewDeck'
import { Constants } from 'expo'
import AddCard from './components/AddCard'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'

function CustomStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent  backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const RouteConfigs = {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: "Decks",
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "New Deck"
    }
  }
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
  Questions: {
    screen: Questions
  },
  AddCard: {
    screen: AddCard
  }
});

MainNavigatorContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render (){
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor={'black'} barStyle='light-content' />
          <MainNavigatorContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
