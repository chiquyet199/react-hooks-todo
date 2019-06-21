import {useState} from 'react'

let id = 0

export default initialValue => {
  const [todos, setTodos] = useState(initialValue)

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, {id: id++, text: todoText, done: false}])
    },
    deleteTodo: todoId => {
      const newTodos = todos.filter(item => item.id !== todoId)
      setTodos(newTodos)
    },
    toggleTodo: todoId => {
      const todo = todos.find(item => item.id === todoId)
      todo.done = !todo.done
      setTodos(todos)
    },
  }
}
