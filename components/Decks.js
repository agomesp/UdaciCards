import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Deck from './Deck'
import ViewDeck from './ViewDeck'
import { withNavigation } from 'react-navigation'
import { getDecks } from '../utils/api'

class Decks extends Component {
  state = {
    decks: {}
  }

  async componentDidMount() {
    const decks = await getDecks()
    this.setState({decks: decks})
  }

  render(){
    return (
      <View>
        {Object.keys(this.state.decks).map((key) => (
          <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('ViewDeck', {deck: this.state.decks[key]})}>
            <Deck deck={this.state.decks[key]}/>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

export default withNavigation(Decks)
