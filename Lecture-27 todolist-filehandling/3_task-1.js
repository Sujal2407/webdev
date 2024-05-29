const path =require('path');
const express=require('express');
const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:true}));

let students=[
    "abhishek pandey","archana","varda","ishan gutpa"
];

let teachers=[
    "kartik","monu","sabeel","mosina"
];

//IMPLEMENT THE FOLLOWING API 
//1. GET'students': GET Details of all student
app.get('/students',(req,res)=>{
    res.send(students);
})
//2.