const express =require('express');
const app=express();
console.log(process.pid);

app.get('/',(req,res)=>{
    res.json({hi:'hello how are you doing kiran'})
})

app.get('/slowapi',(req,res)=>{
    for(let i=0;i<20_000_000_000;i++){

    }
    res.json({blocking:'blokcing api response'})
})