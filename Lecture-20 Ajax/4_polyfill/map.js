let arr=[1,2,3,4,5];
Array.prototype.mymap=function(fun){
    let arr=this;
    let newarr=[];
    //update newArr
    for(let i=0;i<arr.length;i++){
        let val=arr[i];
        let newval=fun(val,i,arr);
        newarr.push(newval);

    }
    //console.log(newarr);
    return newarr;
}

let x=arr.mymap((val,indx,arr)=>{
    return val*val*val;
});

console.log(x);