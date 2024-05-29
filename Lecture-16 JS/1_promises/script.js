let p=new promise(function(resolve,reject){
    resolve();//resolve is called immediately after creating the promises
})
setTimeout(function(){
    p.then(function(data){
        console.log("reolve wala function run ho gya");
    }).catch(function(err){
        console.log(err)
    })
},3000);