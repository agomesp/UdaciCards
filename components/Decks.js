import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Deck from './Deck'
import ViewDeck from './ViewDeck'
import { withNavigation } from 'react-navigation'
import { getDecks } from '../utils/api'
import { receiveEntries } from '../actions'
import { connect } from 'react-redux'

class Decks extends Component {
  state = {
    decks: {}
  }

  async componentDidMount() {
    const decks = await getDecks()
    this.props.dispatch(receiveEntries(decks))
  }
  
  render(){
    return (
      <ScrollView>
        {Object.keys(this.props.entries).map((key) => (
          <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('ViewDeck', {deck: this.props.entries[key]})}>
            <Deck deck={this.props.entries[key]}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

function mapStateToProps(entries) {
  return {
    entries
  }
}

export default withNavigation(connect(mapStateToProps)(Decks))
