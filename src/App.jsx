import React, { createContext, useReducer } from 'react'
import CreateTodo from './components/createTodo'
import Todos from './components/todos'
import './style.css'


 const TodosContext = createContext([])

const App = () => {

      let date = new Date()
      const data = [
            { id: 1, title: "wash dishes", date: date.toDateString(), is_complete: false },
            { id: 2, title: "wash clothes", date: date.toDateString(), is_complete: false },
            { id: 3, title: "cook lunch", date: date.toDateString(), is_complete: false }]

      const reducer = (state, action)=>{
            const {type, payload} = action;
            switch (type) {
                  case "add":{
                        return [...state, payload]
                  }
                        
                        break;
                  case 'edit': {
                        return state.map(sta=>(sta.id === payload.id? {...sta, is_complete: payload.value}: sta))
                  }
                  break;

                  case 'delete': {
                        return state.filter(sta=>sta.id !== payload)
                  }
            
                  default:
                        break;
            }
      }
      const [state, dispatch] = useReducer(reducer, data);
      const todoManager = {state, dispatch}

            
      return (
            <TodosContext.Provider value={todoManager}>
                  <div className='container'>

                        <h4>Tod List</h4>
                        <CreateTodo />
                        <Todos />


                  </div>
            </TodosContext.Provider>
      )
}

export {TodosContext}

export default App