import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Deck from './Deck'
import ViewDeck from './ViewDeck'

class Decks extends Component {
  render(){
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewDeck', {title: 'CardName'})}>
        <Deck />
      </TouchableOpacity>
    )
  }
}

export default Decks
