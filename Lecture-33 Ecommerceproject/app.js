const path=require('path');
const express=require('express');
const app=express;
const PORT=4444;
const mongoose=require('mongoose');
const user=require('./models/user');

// app.use(async(req,res,next))=>{
//     let user=await user.findone({
//         _id:"663259d7561a8ed3c6c28c9c"
//     });
//     req.user=user;
//     next();
// }