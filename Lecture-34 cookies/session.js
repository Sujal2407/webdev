const path=require('path');
const express=require('express');
const app=express();
const PORT=4444;
const session=require('express-session');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:'lkdnfkle daepfsdfe ff',
    resave:false,//do you want to resave the cookies if there are no changes
    saveUninitialized:true//creatge the cookie irrespective of the cookie required or not

}))

//if we have logged in before then we cannot go to loginagain

app.post('/login',(req,res)=>{
    //this will createa cookie
    const {username}=req.body;
    req.session.cnt=0;//set the count in session map;
    req.session.username=username;
    req.session.isadmin=true;
    res.redirect('/profile')
})

app.get('/profile',(req,res,next)=>{
    if(!req.session.username)
        return res.redirect('/login');
})