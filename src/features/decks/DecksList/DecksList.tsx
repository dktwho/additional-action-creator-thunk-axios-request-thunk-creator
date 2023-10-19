import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'
import { useDispatch, useSelector } from 'react-redux'


export const DecksList = () => {
  const decks = useSelector(state => state.decks)
  const dispatch = useDispatch()
  useEffect(() => {
    decksAPI.fetchDecks()
  }, [])
  return <ul className={s.list}></ul>
}
