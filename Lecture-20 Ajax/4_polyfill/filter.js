let arr=[1,2,3,4,5];
Array.prototype.myfilter=function(fun){
    let arr=this;
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        let addtoarray=fun(arr[i],i,arr)
        addtoarray? newarr.push(arr[i]) : "";
    }   
        return newarr;
}
let newarr=arr.myfilter((val,indx,arr)=>{
    if(val%2==0) return true;
    return false;
})
console.log(newarr);
