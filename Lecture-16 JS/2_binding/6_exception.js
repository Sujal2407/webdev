function outerfun(){
    console.log("outer fun",this);

    function innerfun(){
        console.log("inner fun",this);
    }
    innerfun();
}
let obj={
    a:1,
    b:2
}
outerfun.call(obj);