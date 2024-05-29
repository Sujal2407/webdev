var arr=[1,2,3,4,"Hello",true,1.11];
console.log(arr);
arr.unshift("valentine");
console.log(arr);
arr.shift();
console.log(arr);
arr.push("basant panchami");
console.log(arr);
arr.pop();
console.log(arr);

//for of loop
for(let el of arr){
    console.log(el);

}
for(let indx in arr){
    console.log(indx);
}
let indx=arr.indexOf("Hell");
console.log("Index",indx);