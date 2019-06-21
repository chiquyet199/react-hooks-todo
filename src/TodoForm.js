import React from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './useInputState'

const TodoForm = ({saveTodo}) => {
  const {value, reset, onChange} = useInputState()
  const onSubmit = event => {
    event.preventDefault()
    saveTodo(value)
    reset()
  }
  return (
    <form onSubmit={onSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  )
}

export default TodoForm
