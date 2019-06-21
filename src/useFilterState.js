import {useState} from 'react'

export default (initialState) => {
  const [filter, setFilter] = useState(initialState)

  return {
    filter,
    setFilter: val => setFilter(val),
  }
}
