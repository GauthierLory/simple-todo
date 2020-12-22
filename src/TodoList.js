import React from 'react'
import Todo from './Todo'

export default function TodoList({todosList}) {
    return (
        todosList.map(todosList => {
            return <Todo todoList = {todosList}/>
        })
    )
}
