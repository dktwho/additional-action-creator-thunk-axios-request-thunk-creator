import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { useEffect } from 'react'
import { FetchDecksTC } from '../decks-thunks.ts'


export const useFetchDecks = () => {
  const decks = useAppSelector((state) => state.decks.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(FetchDecksTC())
  }, [dispatch])
  return {
    decks
  }
}