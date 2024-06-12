import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
  let todos = [
    'Go to the Gym',
    'Eat more fruit and veg',
    'Pick up the kids drom school'
  ]
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
        <TodoCard key={todoIndex}>
          <p>{todo}</p>
           </TodoCard>
        )
      }
      )}
    </ul>
  )
}
