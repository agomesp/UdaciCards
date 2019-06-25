import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class ViewDeck extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deck Title</Text>
        <Text style={styles.text}>0 cards</Text>

        <TouchableOpacity style={styles.addBtn}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={{color: 'white'}}>Start Quiz</Text>
        </TouchableOpacity>
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

  addBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },

  startBtn: {
    backgroundColor: 'black',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
});


export default ViewDeck
