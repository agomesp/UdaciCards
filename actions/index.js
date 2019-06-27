export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'

export function receiveEntries(entries){
  return {
    type: RECEIVE_ENTRIES,
    entries
  }
}

export function addCardDeck(card){
  return {
    type: ADD_CARD,
    card
  }
}

export function createNewDeck(deckName) {
  return {
    type: ADD_DECK,
    deckName
  }
}
