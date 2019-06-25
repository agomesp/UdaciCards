import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ViewDeck from './ViewDeck'

class Deck extends Component {
  viewDeckDetails = () => {
    console.log(this.props.navigation)
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deck Title</Text>
        <Text style={styles.text}>0 cards</Text>
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
