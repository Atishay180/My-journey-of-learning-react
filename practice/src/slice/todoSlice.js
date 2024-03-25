import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    todo : []
}

export const todoSlice = createSlice({
    name: "hello world",
    initialState,
    reducers: {
        addTodo : (state, action) => {
            state.todo.push(action.payload)
        },
        removeTodo : (state, action) => {},
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer