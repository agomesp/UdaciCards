import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Deck from './Deck'
import ViewDeck from './ViewDeck'
import { withNavigation } from 'react-navigation'

class Decks extends Component {
  render(){
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewDeck')}>
        <Deck />
      </TouchableOpacity>
    )
  }
}

export default withNavigation(Decks)
