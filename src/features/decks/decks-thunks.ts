import { Dispatch } from 'redux'
import { decksAPI } from './decks-api.ts'
import {  setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const FetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const AddDeckTC = (name: string) => (dispatch: AppDispatch) => {
  return decksAPI.addDeck(name).then(() => {
    // dispatch(addDeckAC(res.data))
    dispatch(FetchDecksTC())
  })
}

