import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";




function Home() {
    const [todos,newTodos] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3000/get')
      .then(result => newTodos(result.data))
      .catch(err => console.log(err))
    },[]);

    const handleEdit = (id)=> {
      axios.put('http://localhost:3000/update'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create />
        {
            todos.length === 0
            ?     
            <div><h2>No Record Found</h2></div>
            :
            
              todos.map(todo => 
              
               <div className='task' onClick={() => handleEdit(todo._id)}> 
               {
               todo.done === true ?
               <FaRegCheckSquare />
               :
               <MdCheckBoxOutlineBlank className='icon' />
               }
               <p>{todo.task}</p>
               <MdDelete className='icon' />
               </div>
              )
           
        }
    </div>
  )
}

export default Home