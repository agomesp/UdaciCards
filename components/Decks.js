import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Deck from './Deck'

class Decks extends Component {
  render(){
    return (
      <View>
        <Deck />
        <Deck />
        <Deck />
      </View>
    )
  }
}

export default Decks
