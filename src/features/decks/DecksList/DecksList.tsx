import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'


export const DecksList = () => {
  const decks = useAppSelector((state) => state.decks.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    decksAPI.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [dispatch])

  return <ul className={s.list}>
    {decks.map(deck => (
      <DeckItem deck={deck} key={deck.id}/>
    ))}
  </ul>
}
