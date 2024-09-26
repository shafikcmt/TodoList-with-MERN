import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const [todos,newTodos] = useState([]);
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create />
        {
            todos.length === 0
            ?
            <div><h2>No Record Found</h2></div>
            :
            todos.map(todo => {todo})
        }
    </div>
  )
}

export default Home