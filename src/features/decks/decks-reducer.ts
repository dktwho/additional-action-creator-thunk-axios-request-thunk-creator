import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS': {
      return { ...state, decks: action.decks }
    }
    // case 'DECKS/ADD-DECK': {
    //   return { ...state, decks: [action.deck, ...state.decks] }
    // }
    case 'DECKS/REMOVE-DECK': {
      return { ...state, decks: state.decks.filter(el => el.id !== action.id) }
    }
    case 'DECKS/UPDATE-DECK': {
      return { ...state, decks: state.decks.map(el => el.id === action.updatedDeck.id ? action.updatedDeck : el) }
    }
    default :
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC>
// | ReturnType<typeof addDeckAC>
  | ReturnType<typeof removeDeckAC>
  | ReturnType<typeof updateDeckAC>
export const setDecksAC = (decks: Deck[]) => ({
  type: 'DECKS/SET-DECKS' as const,
  decks,
})

export const removeDeckAC = (id: string) => ({
  type: 'DECKS/REMOVE-DECK' as const,
  id,
})

export const updateDeckAC = (updatedDeck: Deck) => ({
  type: 'DECKS/UPDATE-DECK' as const,
  updatedDeck,
})

// export const addDeckAC = (deck: Deck) => ({
//   type: 'DECKS/ADD-DECK' as const,
//   deck,
// })


