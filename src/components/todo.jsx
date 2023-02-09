import React, {useContext} from 'react';
import { TodosContext } from '../App';

const Todo = ({ todo, }) => {

  const [data, setdata] = useContext(TodosContext)
  const {todos} = data
      const handleDelete=()=>{
        setdata({...data, todos: todos.filter(tod=>tod.id!=todo.id)})
        
      }
  return (
    <div className='todo'>
      <span>{todo.title}</span>
      <small>{todo.date}</small>
      <input type="checkbox" name="" id="" />
      <button onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
    </div>
  )
}

export default Todo