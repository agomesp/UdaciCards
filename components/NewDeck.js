import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { addNewDeck } from '../utils/api'

class NewDeck extends Component {
  state = {
    deckName: ''
  }

  render(){
    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput style={styles.textInput} placeholder='Type in the name' onChangeText={(name) => this.setState({deckName: name})} value={this.state.deckName}/>
        <TouchableOpacity style={styles.submitBtn} onPress={() => {
          addNewDeck(this.state.deckName)
          this.props.navigation.goBack()
        }}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center'
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
  textInput: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    marginTop: 25,
    marginBottom: 25,
    paddingLeft: 10,
  },
  submitBtn: {
    backgroundColor: 'black',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default NewDeck
