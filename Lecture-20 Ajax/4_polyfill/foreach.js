let arr=[1,2,3,4,5];
let arr1=[1,2,3,"hello",4];

Array.prototype.meraForEach=function(fun){
    //let arr=this;
    //fun=(data,indx,arr)=>{}
    //console.log("index",indx,"data","arr");
    //}
    let arr=this;
    for(let i=0;i<arr.length;i++){
        fun(arr[i],i,arr);
    }
}

arr.meraForEach((data)=>{
    console.log(data);
})

