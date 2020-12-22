import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  return (
    <>
    <TodoList todosList={todos}/>
    <input type="text"/>
    <button type="">Add Todo</button>
    <button type="">Clear</button>
    <div>0 left todo</div>
    </>
  )
}

export default App;
