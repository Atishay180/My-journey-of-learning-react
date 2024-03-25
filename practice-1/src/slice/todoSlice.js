import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [ {id: 1, text: "hello world"} ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        editText : (state, action) => {
            const {id, newText} = action.payload
            const todoToEdit = state.todos.find(todo => todo.id === id)
            if (todoToEdit) {
                todoToEdit.text = newText;
            }
        },
        removeText : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        removeAllText : (state, action) => {
            state.todos = []
        }
    }
})

export const {addTodo, editText, removeAllText, removeText} = todoSlice.actions
export default todoSlice.reducer