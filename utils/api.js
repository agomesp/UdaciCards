import { AsyncStorage } from 'react-native'

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function addNewDeck(deckName) {
  return AsyncStorage.mergeItem('UdaciCards:decks', JSON.stringify({
      [deckName]: {
        title: deckName,
        questions: []
      }
  }))
}

export function getDecks() {
  if (AsyncStorage.getItem('UdaciCards:decks')) {
    return AsyncStorage.getItem('UdaciCards:decks')
      .then(res => JSON.parse(res))
  } else {
    return dummyData
  }

}

export const addCardToDeck = async (deckTitle, card) => {
  let decks = await getDecks()

  if (!decks[deckTitle]) {
    decks[deckTitle] = { name: deckTitle, questions: [{ ...card }] }
  } else {
    decks[deckTitle].questions = [...decks[deckTitle].questions, card]
  }

  try {
    await AsyncStorage.setItem('UdaciCards:decks', JSON.stringify(decks))
  } catch (error) {
    console.warn('Error adding card to deck:', error)
  }
}
