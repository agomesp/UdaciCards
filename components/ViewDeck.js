import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Questions from './Questions'
import { withNavigation } from 'react-navigation'
import AddCard from './AddCard'

class ViewDeck extends Component {

  state = {
    deck: {},
    updated: false,
  }

  onGoBack = () => {
    this.forceUpdate()
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck.title
    }
  }

  componentWillMount() {
    this.setState({deck: this.props.navigation.state.params.deck})
  }

  render(){
    const deck = this.state.deck
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.text}>{deck.questions.length} cards</Text>

        <TouchableOpacity style={styles.addBtn} onPress={() => this.props.navigation.navigate('AddCard', {deck: deck, onGoBack: this.onGoBack})}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        {deck.questions.length !== 0 ?
            <TouchableOpacity style={styles.startBtn} onPress={() => this.props.navigation.navigate('Questions', {deck: deck})}>
              <Text style={{color: 'white'}}>Start Quiz</Text>
            </TouchableOpacity>
          :
            <Text>No question to answer</Text>
        }

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
    marginTop: 100,
    borderWidth: 1,
    marginBottom: 5,
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


export default withNavigation(ViewDeck)
