let arr=[1,2,3,4,5];
let ans=arr.reduce((acc,val)=>{
    console.log("acc",acc,"val",val);
    return acc*val;

},1)
console.log(ans);