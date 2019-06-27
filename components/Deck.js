import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ViewDeck from './ViewDeck'

class Deck extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.deck.title}</Text>
        <Text style={styles.text}>{this.props.deck.questions.length} cards</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize:30,
    fontWeight:'bold'
  },
  text: {
    color: "gray"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 50,
    paddingTop:50,
    justifyContent: 'center'
  },
});

export default Deck
