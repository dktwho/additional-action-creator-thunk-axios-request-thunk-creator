import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>(`decks`)
  },
  addDeck(name: string) {
    return instance.post<Deck>(`decks`, { name })
  },
  removeDeck(id: string) {
    return instance.delete(`decks/${id}`)
  },
  updateDeck({ id, name }: UpdateDeckParams) {
    return instance.patch(`decks/${id}`, { name })
  },
}

export type UpdateDeckParams = {
  id: string
  name: string
}


export type FetchDecksResponse = {
  items: Deck[];
  pagination: RootObjectPagination;
  maxCardsCount: number;
}
export type Author = {
  id: string;
  name: string;
}
export type Deck = {
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string;
  rating: number;
  created: string;
  updated: string;
  cardsCount: number;
}
export type RootObjectPagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}