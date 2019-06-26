import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Card'
    }
  }
  render(){
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput style={styles.textInput} placeholder='Question'/>
        <TextInput style={styles.textInput} placeholder='Answer'/>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
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


export default AddCard
