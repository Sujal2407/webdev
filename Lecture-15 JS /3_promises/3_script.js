function maggilekaraunga(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            letdukankhulihai=true;
            if (dukankhulihai){
                resolve("maggimilgai");
            }
            else{
                reject("maggi nhi milli ab main kya karegi")
            }
        },2000);
    })
}
maggilekaraunga()
.then(function(msg){
    console.log(msg)
})
.catch(function(err){
    console.log(err)
})

