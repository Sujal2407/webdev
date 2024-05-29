const path=require('path');
const express=require('express');
const app=express();
const PORT=4444;
const mongoose=require('mongoose');
const adress=require('./models/adress');
const student=require('./models/student');;;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/student',async(req,res)=>{
    try{
        const {name,age,marks}=req.body;
        let stu=await students.create({name,age,marks});

        res.send({
            msg:"student create sucessfully",
            student:stu
        })
    }
    catch(err){
        console.log(err);
    }
})