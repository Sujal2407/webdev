function add(a,b){
    return a+b;
}
console.log(add(12,24));
function sayhi(name){
    return "hello "+name;
}
console.log(sayhello("mithu"));
//since we invoke the function hello by the name there 
//it we can skip that part
//console.log(hello("mithu"));
let saybye=function(name){
    return "Bye "+name;
}
console.log(saybye("bhupesh"));