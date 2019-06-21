import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const TodoList = ({todos, deleteTodo, toggleTodo}) => (
  <div className="todolist">
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button onClick={() => {toggleTodo(todo.id)}}>
          <Checkbox tabIndex={-1} checked={todo.done} />
          <ListItemText primary={todo.text} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(todo.id)
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </div>
)

export default TodoList
