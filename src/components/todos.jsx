import React, { useContext, useEffect } from 'react'
import Todo from './todo'
import  {TodosContext}  from "../App"

const Todos = () => {
      const [data, setdata] = useContext(TodosContext)
      const todos = data.todos
      
  return (
    <div className='todos'>
      
      {todos.map(todo=> <Todo key={todo.id} todo={todo} todos={todos} />)}
      
    </div>
  )
}

export default Todos