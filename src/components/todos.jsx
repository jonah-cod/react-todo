import React, { useContext, useEffect } from 'react'
import Todo from './todo'
import  {TodosContext}  from "../App"

const Todos = () => {
      const {state} = useContext(TodosContext)
      
      
  return (
    <div className='todos'>
      
      {state.map(todo=> <Todo key={todo.id} todo={todo} todos={state} />)}
      
    </div>
  )
}

export default Todos