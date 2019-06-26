import { AsyncStorage } from 'react-native'

export function addNewDeck(deckName) {
  return AsyncStorage.setItem('UdaciCards:decks', JSON.stringify({
      [deckName]: {
        title: deckName,
        questions: []
      }
  }))
}

export function getDecks() {
  return AsyncStorage.getItem('UdaciCards:decks')
    .then(res => JSON.parse(res))
}

export function addCard({deckName, question, answer}) {
  return AsyncStorage.mergeItem('UdaciCards:decks', JSON.stringify({
    [deckName]: {
      title: deckName,
      questions: [
        ...this.props[deckName].questions, {
          question: question,
          answer: answer
        }
      ]
    }
  }))
}
