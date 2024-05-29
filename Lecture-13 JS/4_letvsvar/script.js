//let is block,hoisiting nahi hoti 
//var is functional scope,hoisting hoti hai

//for(let i=0;i<5;i++){
//     console.log(i);
// }
var x=10;
function fun(){
    //console.log(x)
    let x=2;
    x++;
    

    console.log(x);
    x++;
}
fun();
console.log(x);