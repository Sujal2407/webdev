//learing to bould api \
const path=require('path');
const express=require('express');
const app=express();
const PORT=3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const tasks=require('./controller/todos');

//1.get todos return all todos
app.get('/todos',(req,res) =>{
    tasks.getTodos()
        .then(todos=>{
            console.log(todos)
            res.send(todos);
        })
        .catch(err=>{
            res.send(err);
        })
})

//post '/todos/:add a newtask to todos array
app.post('/todos',(req,res)=>{
    const {newtask}=req.body;
    tasks.addTask(newtask)
        .then(msg=>{
            console.log(msg);
            res.redirect('/todos');
        })
        .catch(err=>{
            res.send(err);
        })
})

//3 delete a task

//name will come in query parameter
app.get('/deletetask',(req,res)=>{
    const {name}=req.query;
    tasks.increasePriority(name).then((msg)=>{
        res.redirect('/todos');
    }).catch(err=>{
        res.send(err);
    })

    
})
