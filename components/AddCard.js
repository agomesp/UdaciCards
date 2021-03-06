import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { addCard, addCardToDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addCardDeck } from '../actions/index'

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Card'
    }
  }

  state = {
    deckName: '',
    question: '',
    answer: '',
    deck: {},
  }

  componentDidMount() {
    const deckName = this.props.navigation.state.params.deck.title
    const deck = this.props.navigation.state.params.deck
    this.setState({deckName: deckName, deck: deck})
  }

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
    navigation.state.params.onGoBack({ updated: true })
  }

  handleAddCard = () => {
    const data = this.state
    const question = this.state.question
    const answer = this.state.answer
    const deckName = this.state.deckName
    const { navigation } = this.props
    const deck = this.state.deck

    const newDeck = {
      title: deckName,
      questions: [
        ...deck.questions, {
          question,
          answer
        }
      ]
    }

    addCardToDeck(this.state.deckName, {question, answer})
    navigation.goBack()
    navigation.state.params.onGoBack(deckName, question, answer, newDeck)

  }

  render(){
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput style={styles.textInput} placeholder='Question' onChangeText={(question) => this.setState({question: question})} value={this.state.question} />
        <TextInput style={styles.textInput} placeholder='Answer' onChangeText={(answer) => this.setState({answer: answer})} value={this.state.answer} />
        {this.state.question !== '' && this.state.answer !== ''
          ?
            <TouchableOpacity style={styles.submitBtn} onPress={this.handleAddCard}>
              <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity>
          :
          <Text>Type the question and answer</Text>
        }

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


export default connect()(AddCard)
