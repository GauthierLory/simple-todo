import React, { useState,useRef } from 'react'
import TodoList from './TodoList'

function App() {

  const todoNameRef = useRef()
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "test 1",
      complete: false
    }
  ])

  function HandleAddtodo(e){
    const name = todoNameRef.current.value
    if(name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos,{
        id: 1,
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
