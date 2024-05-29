function outerfun(){
    //inner function create kkia hai
    function innerfun(){
        console.log("inside inner fun");
        //function ke andar se kch return na karne par it return 
    }
    return innerfun;
}
let f=outerfun();
console.log(f);
f();
function add(a,b){
    
    return a+b;

}
function subtract(a,b){
    return a-b;
}
merafunction(function add(a,b){
    return a+b;
},function subtract(a,b){
    return a-b;
});