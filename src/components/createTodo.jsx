import React, {useState, useRef, useEffect, useContext} from 'react'
import { TodosContext } from '../App'
const CreateTodo = () => {

      const {dispatch} = useContext(TodosContext)
      
      const [title, settitle] = useState("")
      const handleChange =(e)=>{
            settitle(e.target.value)
      }

      let date = new Date()

      const input_ref = useRef(null);


      const handleSubmit =(e)=>{
            e.preventDefault()
            let todo = {id: date.getMilliseconds(), title,date:date.toDateString(), is_complete: false}

            dispatch({type: 'add', payload:todo})
            input_ref.current.focus()
            settitle("")
      }


      useEffect(()=>{
            input_ref.current.focus()
      }, [])
  return (
      
        <form className="form" onSubmit={handleSubmit}>
              <input type="text"  
                     className="input-field" 
                     placeholder="track your tasks" 
                     value={title}
                     onChange={handleChange}
                     ref={input_ref}/>

              <button type="submit" id="btn" onClick={handleSubmit}>add</button>

        </form>
        
  )
}

export default CreateTodo