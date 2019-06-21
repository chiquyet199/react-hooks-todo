import React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import useTodoState from './useTodoState'
import useFilterState from './useFilterState'
import './styles.css'

const App = () => {
  const {todos, addTodo, deleteTodo, toggleTodo} = useTodoState([])
  const {filter, setFilter} = useFilterState('all')
  const saveTodo = todoText => {
    const trimmedText = todoText.trim()

    if (trimmedText.length > 0) {
      addTodo(trimmedText)
    }
  }
  const conditionMapper = {
    all: item => item,
    done: item => item.done,
    notDone: item => !item.done,
  }
  const displayTodo = todos.filter(conditionMapper[filter])
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm saveTodo={saveTodo} />
      <TodoFilter filter={setFilter}/>

      <TodoList todos={displayTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
