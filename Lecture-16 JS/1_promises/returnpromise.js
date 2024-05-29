let url='mywebsite.com/movie.mp3';
let p=new promise(function(resolve,reject){
    setitmeout(function(){
        let extension=url.split('.').pop();
        if(extension!='mp4')return reject("abey url toh shi dede vro");
        resolve("hello");
    },2000);
})

p.then(function(msg){
    console.log(msg)
    return "world";
}).then(function(newmsg){
    console.log(newmsg)
}).catch(function(err){
    console.log(newmsg)
}).catch(function(err){
    console.log(err)
})