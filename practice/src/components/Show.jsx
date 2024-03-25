import React from 'react'
import { addTodo } from '../slice/todoSlice'
import {useSelector} from 'react-redux'

function Show() {
    const todos = useSelector(state => state.todo)

  return (
    <div>
      {todos.map((todo, id) => (
        <li key={id}>{todo}</li>
      ))}
    </div>
  )
}

export default Show
