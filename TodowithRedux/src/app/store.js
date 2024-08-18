import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/todoSlice'

export default configureStore({
    reducer: todoReducer
});