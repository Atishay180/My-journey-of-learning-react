import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../featues/todo/todoSlice'

export const store = configureStore({
    reducer: todoSlice
})