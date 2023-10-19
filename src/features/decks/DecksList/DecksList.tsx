import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { FetchDecksTC } from '../decks-thunks.ts'


export const DecksList = () => {
  const decks = useAppSelector((state) => state.decks.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(FetchDecksTC())
  }, [dispatch])

  return <ul className={s.list}>
    {decks.map(deck => (
      <DeckItem deck={deck} key={deck.id} />
    ))}
  </ul>
}
