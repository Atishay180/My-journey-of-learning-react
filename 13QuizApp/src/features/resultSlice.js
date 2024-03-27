import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    results : []
}

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.results.push(action.payload)
        },
    }
})

export const {addTodo, editTodo, displayTodo} = resultSlice.actions
export default resultSlice.reducer