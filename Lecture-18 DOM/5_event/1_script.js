let btn=document.querySelector('button');
let para=document.querySelector('.para');
console.log(btn);
console.log(para);
btn.onclick=()=>{
    console.log("clicked");
}
btn.onclick=()=>{
    console.log("i am clicked");
}
para.ondblclick=()=>{
    console.log("i am double clicked")
}