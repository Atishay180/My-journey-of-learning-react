import React, { useState } from 'react'
import { addTodo } from '../slice/todoSlice'
import {useDispatch} from 'react-redux'

function InputTodo() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState("")
    
  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={() => dispatch(addTodo(todo))}>Add</button>
    </div>
  )
}

export default InputTodo
