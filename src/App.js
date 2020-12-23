import React, { useState,useRef } from 'react'
import TodoList from './TodoList';
import uuidv4 from 'uuid/dist/v4';

function App() {

  const todoNameRef = useRef()
  const [todos, setTodos] = useState([])

  function HandleAddtodo(e){
    const name = todoNameRef.current.value
    if(name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos,{
        id: uuidv4(),
        name: name,
        complete: false
      }]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todosList={todos}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={HandleAddtodo}>Add Todo</button>
    <button type="">Clear</button>
    <div>0 left todo</div>
    </>
  )
}

export default App;
