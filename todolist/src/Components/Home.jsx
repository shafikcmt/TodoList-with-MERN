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
      .then(result => location.reload())
      .catch(err => console.log(err))
    }
    const handleDelete = (id) =>{
      axios.delete('http://localhost:3000/delete'+id)
      .then(result => location.reload())
      .catch(err => console.log(err))
    }

    const unTick = (id) =>{
      axios.put('http://localhost:3000/untick'+id)
      .then(result => location.reload())
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
              
               <div className='task' > 
               {
               todo.done === true ?
               <FaRegCheckSquare onClick={() => unTick(todo._id)} />
               :
               <MdCheckBoxOutlineBlank className='icon' onClick={() => handleEdit(todo._id)} />
               }
               <p className={todo.done ? "line":""}>{todo.task}</p>
               <MdDelete className='icon' onClick={()=> handleDelete(todo._id)} />
               </div>
              )
           
        }
    </div>
  )
}

export default Home