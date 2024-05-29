function maggilaao(cb){
    console.log("maggi lene chale gaye");
    setTimeout(function(){
        console.log("maggi lekar aa gya");
        cb(maggikhaoo);
    },2000);
}
function maggibanao(cb){
    console.log("maggi banana start");
    setTimeout(function(){
        console.log("maggi ban gayi");
        cb();

    },2000);
}

function maggikhaao(){
    console.log("maggi khana start");
    setTimeout(function(){
        console.log("maggi khana start")
    },2000)
}
maggilaao(maggibanao);