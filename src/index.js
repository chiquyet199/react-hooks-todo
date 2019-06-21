import React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import useTodoState from './useTodoState'
import './styles.css'

const App = () => {
  const {todos, addTodo, deleteTodo, toggleTodo, filter} = useTodoState([])
  const saveTodo = todoText => {
    const trimmedText = todoText.trim()

    if (trimmedText.length > 0) {
      addTodo(trimmedText)
    }
  }
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm saveTodo={saveTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
