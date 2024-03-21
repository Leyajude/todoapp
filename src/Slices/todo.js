import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../Slices/todoSlice';

 const store = configureStore({
  reducer: {
    todos: todosSlice
  },
});
export default store