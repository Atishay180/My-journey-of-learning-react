import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../slice/todoSlice'

function Input() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const handleOnClick = () => {
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <div className='input-container'>
      <input className='border border-black w-3/4' placeholder='Enter Text' type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={handleOnClick}>ADD TODO</button>
    </div>
  )
}

export default Input
