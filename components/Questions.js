import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Questions extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz'
    }
  }

  state = {
    questions: [],
    question: '',
    answer: '',
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
      show: 'Answer',
    })
  }

  resetQuiz = () => {
    this.setState({
      questions: this.props.navigation.state.params.deck.questions,
      question: this.props.navigation.state.params.deck.questions[0].question,
      answer: this.props.navigation.state.params.deck.questions[0].answer,
      finished: false,
      show: 'Answer',
      locationQ: 1,
      corrects: 0,
      finalResult: 0,
    })
  }

  componentDidMount () {
    this.resetQuiz()
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
                <Text style={{color: 'red'}} onPress={this.reveal}>Reveal {this.state.show}</Text>
                {this.state.show === 'Question'
                  ?
                    <View>
                      <TouchableOpacity style={styles.correctBtn} onPress={this.correctAnswer}>
                        <Text style={{color: 'white'}}>CORRECT</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.incorrectBtn} onPress={this.wrongAnswer}>
                        <Text style={{color: 'white'}}>INCORRECT</Text>
                      </TouchableOpacity>
                    </View>
                  :
                    false
                }

              </View>
              :
                <View>
                  <Text>{Math.round(this.state.corrects * 100 / this.state.questions.length)}% questions correct</Text>
                  <TouchableOpacity style={styles.quizBtn} onPress={this.resetQuiz}>
                    <Text>Redo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.quizBtn} onPress={() => {this.props.navigation.goBack()}}>
                    <Text>Go Back</Text>
                  </TouchableOpacity>
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

  correctBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'green',
    marginBottom: 5,
  },

  incorrectBtn: {
    backgroundColor: 'red',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  quizBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderWidth: 1,
    marginBottom: 0,
  },
});


export default Questions
