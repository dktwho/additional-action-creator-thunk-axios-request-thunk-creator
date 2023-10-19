import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'

export const DecksList = () => {
  useEffect(() => {
    decksAPI.fetchDecks()
  }, [])
  return <ul className={s.list}></ul>
}
