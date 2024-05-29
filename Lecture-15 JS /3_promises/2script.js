let maggilekaraunga=new promise(function(resolve,reject){
    setTimeout(function(){
        let dukankhulihai=false;
        if(dukankhulihai){
            resolve("maggi mill gai");
        }
        else{
            reject("maggi nhi milli");
        }
    },2000)
})

maggilekaraunga.then(function(data){
    console.log(data);
})
.catch(function(msg){
    console.log(msg)
})