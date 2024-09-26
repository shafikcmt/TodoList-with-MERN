import React, { useState } from 'react'
import axios from 'axios';

function Create() {
    const [task,setTask] = useState();
    const taskAdded = ()=>{
        axios.post('http://localhost:3000/add',{task:task})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }
  return (
    <div className='addtask'>
        <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
        <button onClick={taskAdded}>Add Task</button>
    </div>
  )
}

export default Create