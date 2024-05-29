let id=setTimeout(function(){
    console.log("Hello world")
}, 5000);
// console.log(id);
setTimeout(function(){
    clearTimeout(id);
},6000);


console.log("hey there!");