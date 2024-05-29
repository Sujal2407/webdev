//LEARNING TO BUILD APIs
const path=require('path');
const express=require('express');
const app=express();
const PORT =3000;

app.use(express.static(path.join(__dirname,'public')));//will send the index.html to the public folder itself
app.use(express.static.urlencoded({extended:true}));
app.use(express.json());

let todos=["cricket","singing","dancing","cuddling"];

//1. GET'/todos':return all the todos array
app.get('/todos',(req,res)=>{
    res.send(todos)
})

//2. POST :add a new task in the game of thrones
app.post('/todos',(req,res)=>{
    const {newtask}=req.body;
    let indx=todos.indexOf(newtask);
    if(indx==-1) todos.unshift(newtask );//prevent adding duplicate task
    res.redirect('/todos');
})

///3. GET '/deletetask': delete a task from todo list by name
//name will come in query parameter
app.get('/deltetask',(req,res)=>{
    const {name}=req.query;
    todos=todos.filter(t=>t!==name);
    res.redirect('/todos');
})


//4. GET '/decrease:decrease the priority of the given task
app.get('/decrease',(req,res)=>{
    const{name}=req.query;
    let index=todos.indexOf(name)
    if(index!=-1 && index>=0 && index<todos.length-1){
        [todos[index],todos[index+1]]=[todos[index+1],todos[index]];
    }
    res.redirect('/todos');
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
});