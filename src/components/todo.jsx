import React, {useEffect, useContext} from 'react';
import { TodosContext } from '../App';

const Todo = ({ todo }) => {
  const {state, dispatch} = useContext(TodosContext)
  const handleDelete =()=>{
    dispatch({type:'delete', payload:todo.id})
  }

  const handleEdit = (e)=>{
    console.log()
    dispatch({type: 'edit', payload: {id: todo.id, value: e.target.checked}})
  }

  const isCompleted =()=>{
    if(todo.is_complete) return {textDecoration:'line-through'}
  }
  
  
  return (
    <div className='todo'>
      <span style={isCompleted()}>{todo.title}</span>
      <small>{todo.date}</small>
      <input type="checkbox" name="" id="" onChange={handleEdit} />
      <button onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
    </div>
  )
}

export default Todo