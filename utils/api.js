import { AsyncStorage } from 'react-native'

export function addNewDeck(deckName) {
  return AsyncStorage.mergeItem('UdaciCards:decks', JSON.stringify({
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
