const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const TodoModel = require('./Models/Todo');

mongoose.connect('mongodb://localhost:27017/demo')
app.use(express.json())

app.use(cors())
app.post('/add',(req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task:task,
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.put('/update:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id},{
        done:true
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/untick:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id},{
        done:false
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.listen(3000,()=>{
    console.log('Server is Runnig')
})

