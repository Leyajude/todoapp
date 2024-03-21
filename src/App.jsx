import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, selectTodos } from './Slices/todoSlice';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      }));
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
  <div className='container mt-5 ms-5  '>
      <div className='row mt-5'>
      <h1 className='text-center mt-3'>ToDo App</h1>
     <div className='container text-center col-lg-6 mt-4'>
     <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter your todo..."
      />
         <br />
      <br />
            <button className='btn btn-success' onClick={handleAddTodo}>Add Todo</button>

     </div>
   
    <div className='col-lg-6 mt-2'>
    <h2 style={{}}>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  </div>
  );
}

export default App;