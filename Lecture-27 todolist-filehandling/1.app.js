const path=require('path');
const express=require('express');
const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:true})); //this will make the body readable
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
//to make axios data readable 

//get :/submit form|| API ka route
app.get('/submit-form',(req,res)=>{
    const {username,password}=req.query;
    res.send(`recieved GET request on /submit-form with ${username},${password}`)
})

//post :/submit form ||api ka route hai
app.post('/submit-form',(req,res)=>{
    console.log("BODY",req.body);
    const{username,password}=req.body;
    res.send(`recieved POST request on /submit-form with ${username},${password}` )
})

app.listen(PORT,()=>{
    console.log(`http://localhost :`+PORT);
});

