module.exports=function isloggedin(req,res,next){
    let loggedin=true;
    if(loggedin ==false)return res.send("login first");
    next();
}