import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Questions extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz'
    }
  }

  state = {
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ],
    question: 'What?',
    answer: 'Who?',
    show: 'Answer',
    locationQ: 1,
    corrects: 0,
    finalResult: 0,
    finished: false
  }

  reveal = () => {
    this.state.show === 'Answer'
    ? this.setState({show: 'Question'})
    : this.setState({show: 'Answer'})
  }

  correctAnswer = () => {
    this.setState({
      corrects: this.state.corrects + 1
    })

    this.state.questions[this.state.locationQ]
    ? this.nextQuestion()
    : this.setState({finished: true})
  }

  wrongAnswer = () => {
    this.state.questions[this.state.locationQ]
      ?
        this.nextQuestion()
      :
        this.setState({finished: true})
  }

  nextQuestion = () => {
    this.setState({
      locationQ: this.state.locationQ + 1,
      question: this.state.questions[this.state.locationQ].question,
      answer: this.state.questions[this.state.locationQ].answer,
    })
  }

  componentDidMount () {
    this.setState({
      question: this.state.questions[0].question,
      answer: this.state.questions[0].answer,
    })
  }

  render(){
    const finalResult = this.state.finalResult
    const finished = this.state.finished
    return (
        <View style={styles.container}>
          {!finished
            ?
              <View style={[styles.container, {borderBottomWidth: 0}]}>
                <Text>{this.state.locationQ}/{this.state.questions.length}</Text>
                <Text style={styles.title}>{this.state.show === 'Answer' ? this.state.question : this.state.answer}</Text>
                <Text style={{color: 'red'}} onPress={this.reveal}>{this.state.show}</Text>

                <TouchableOpacity style={styles.addBtn} onPress={this.correctAnswer}>
                  <Text>CORRECT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startBtn} onPress={this.wrongAnswer}>
                  <Text style={{color: 'white'}}>INCORRECT</Text>
                </TouchableOpacity>
              </View>
              :
                <View>
                  <Text>{this.state.corrects * 100 / this.state.questions.length}% questions correct</Text>
                </View>
              }
        </View>

    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center',
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
    justifyContent: 'center',
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


export default Questions
