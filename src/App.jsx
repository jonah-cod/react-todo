import React, {useState, createContext, useContext } from 'react'
import CreateTodo from './components/createTodo'
import Todos from './components/todos'
import './style.css'


 const TodosContext = createContext([])

const App = () => {


      let date = new Date()
      const data =useState({
            idGenerator: date,
            todos:[
            { id: 1, title: "wash dishes", date: date.toDateString(), is_complete: false },
            { id: 2, title: "wash clothes", date: date.toDateString(), is_complete: false },
            { id: 3, title: "cook lunch", date: date.toDateString(), is_complete: false }]})

            
      return (
            <TodosContext.Provider value={data}>
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