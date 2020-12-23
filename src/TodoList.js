import React from 'react'
import Todo from './Todo'

export default function TodoList({todosList}) {
    return (
        todosList.map(todo => {
            return <Todo key={todo} todo = {todo}/>
        })
    )
}
