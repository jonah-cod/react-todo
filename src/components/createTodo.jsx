import React, {useState, useRef, useEffect, useContext} from 'react'
import { TodosContext } from '../App'
const CreateTodo = () => {

      const [data, setdata] = useContext(TodosContext)
      const { todos, idGenerator } = data;
      const [title, settitle] = useState("")
      const handleChange =(e)=>{
            settitle(e.target.value)
      }

      const input_ref = useRef(null);


      const handleSubmit =(e)=>{
            e.preventDefault()
            let todo = {id: idGenerator.getMilliseconds(), title,date:idGenerator.toDateString(), is_complete: false}

            setdata({...data, todos: [...todos, todo]})
            input_ref.current.focus()
            settitle("")
      }

      console.log(todos
            )
      useEffect(()=>{
            input_ref.current.focus()
      }, [])
  return (
      <TodosContext.Provider value={todos}>
        <form className="form" onSubmit={handleSubmit}>
              <input type="text"  
                     className="input-field" 
                     placeholder="track your tasks" 
                     value={title}
                     onChange={handleChange}
                     ref={input_ref}/>

              <button type="submit" id="btn" onClick={handleSubmit}>add</button>

        </form>
        </TodosContext.Provider>
  )
}

export default CreateTodo