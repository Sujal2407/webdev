let id=setTimeout(function(){
    console.log("helloworld")
},5000,setTimeout(function(){
    clearTimeout(id);
},4000));
//ek hee baat ho rhi bhai 