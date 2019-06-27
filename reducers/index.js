import { RECEIVE_ENTRIES, ADD_CARD, ADD_DECK } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      }

    case ADD_CARD:
      const {deckName, question, answer} = action.card
      return {
        ...state,
        [deckName]: {
          ...state[deckName],
          questions: [
            ...state[deckName].questions, {
              question,
              answer
            }
          ]
        }
      }

    case ADD_DECK:
      return {
        ...state,
        [action.deckName]: {
          title: action.deckName,
          questions: []
        }
      }

    default:
      return state
  }
}

export default entries
