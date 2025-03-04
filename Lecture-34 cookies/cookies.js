const path=require('path');
const express=require('express');
const app=express();
const PORT=4444;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));

const cookies=require('cookies');
const keys=['keyboard cat']

//if we have logged in earlier then we cannot login again
app.post('/login',(req,res)=>{
    //this will create a cookie
    const {username}=req.body;
    var cookies=new cookies(req,res,{keys:keys});

    cookies.set('user ',JSON.stringify({
        isadmin:false,
        username
    }));
    res.redirect('/profile');
})

app.get('/profile',(req,res,next)=>{
    var cookie=new cookies(erq,res,{keys:keys});
    let data=cookies.get('user');

    if(!data)
        return res.render ('login');
    res.redirect('/profile');
});

//we cannot access profile before login
app.get('/profile',(req,res,next)=>{
    var cookies=new cookies(req,res,{keys:keys});
    let data=JSON.parse(data);
    res.render('profile',{
        username:data.username
    });
})

app.get('/admin',(req,res)=>{
    var cookies=new cookies(req,res,{keys:keys});
    let data=cookies.get('user');
    if(!data)
        return res.redirect('/login');
    data=JSON.parse(data);
    if(data.isadmin) return res.render('admin');
    res.redirect('/profile');
})
app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});
