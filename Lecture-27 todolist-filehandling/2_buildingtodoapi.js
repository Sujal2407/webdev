//learning to build apis
const path =require('path');
const express=require('express');
const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:true}));

let todos=["cricket","dance","sing","hockey"];

//1.GET '/todos':return all todos
app.get('/todos',(req,res)=>{
    res.send(todos);
})

//2.POST '/todos':add a newtask todos array
app.post('/todos',(req,res)=>{
    const {newtask}=req.body;
    //res.send ("want to add ${newtask} in todos?");
    todos.unshift(newtask);
    res.send(todos);
})

//3.GET '/deletetask':delete a task from todo list by name
//name will come in query in query parameter
app.get('/deletetask',(req,res)=>{
    const {name}=req.query;
    //res.send('trying to increase of ${name} in todos?);
    //["cricket","dance","sing","hockey"];
    let index=todos.indexOf(name);
    if(index!=-1&& index>0 && index<todos.length){
        [todos[index],todos[index-1]]=[todos[index-1],todos[index]];
    }
    res.send(todos);
})

//4. GET '/decrease':decrease the priority of a given task{name}
app.get('/decrease',(req,res)=>{
    let index =todos.indexOf(name)
    if(index!=-1 &&index>0 && index<todos.length){
        [todos[index],todos[index-1]]=[todos[index-1],todos[index]];
    }
    res.send(todos);
})

//4.increase ka list bhi toh banana  hai bhaiya jee 
app.get('/increase',(req,res)=>{
    const {name}=req.query;
    let index=todos.indexOf(name);
    if(index!=-1 && index>=0 && index<todos.length-1){
        [todos[index],todos[index+1]]=[todos[index+1],todos[index]];
    }
    res.send(todos);
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
});
