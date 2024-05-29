const express=require('express');
const path=require('path');
const app=express();
const PORT=3000;

//let publicpath=path.join(__dirname,"public");
app.use(express.static(path.join(__dirname,"public")));
app.get('/',(req,res)=> {
    res.send("hello,how are you?");
})

app.get('/greeting',(req,res)=>{
    res.send("<h1 style='background-color:purple; color :red'>hey,good day sir!</h1>")
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));

    
})

// PARAMS req:'/greet/aman'
app.get('/greet/:name',(req,res)=>{
    console.log(req.params);
    res.send('aur,kyaa haal chaal hai? ${req.params.name}');

})

app.listen(PORT,()=>{
    console.log('http://localhost:${PORT}');
});
//this will start the server