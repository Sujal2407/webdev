let arr=[1,2,3,4,5];
let newarr=arr.filter((val)=>{
    if(val%2==0) return false;
    else return true;

})
let newarr1=arr.filter((val)=>{
    return val%2==0;

})
console.log(newarr);
console.log(newarr1);

console.log(arr);
