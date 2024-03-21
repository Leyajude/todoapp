import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min (12).css'
import { Provider } from 'react-redux'
import todo from './Slices/todo.js'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> <Provider store={todo}><App /></Provider> </BrowserRouter>
  </React.StrictMode>,
)
