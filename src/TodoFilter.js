import React from 'react'
import Button from '@material-ui/core/Button'

const TodoFilter = props => {
  return (
    <>
      <Button
        onClick={() => {
          props.filter('all')
        }}
        color="secondary"
      >
        All
      </Button>
      <Button
        onClick={() => {
          props.filter('done')
        }}
        color="secondary"
      >
        Done
      </Button>
      <Button
        onClick={() => {
          props.filter('notDone')
        }}
        color="secondary"
      >
        Not done
      </Button>
    </>
  )
}

export default TodoFilter
