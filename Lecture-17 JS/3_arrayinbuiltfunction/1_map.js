let arr=[1,2,3,4];
let newarr=arr.map(function(val,indx){
    //console.log("val",val,"index",index,"arr")
    return val+val;
})
console.log(newarr);
let newarr1=arr.map((val,indx,arr)=>{
    //console.log("val",val,"index",index,"arr",arr);
    return val*val;
});
console.log(newarr1);
let boolarr=arr.map((val)=>{
    if(val%2==0)return true;
    else return false;
})
console.log(boolarr);
