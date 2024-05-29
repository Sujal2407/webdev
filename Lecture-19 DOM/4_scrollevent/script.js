let body=document.querySelector('body');
let navBar=document.querySelector('.navbar');
console.log(body);
// body.addEventListener('scroll',(ev)=>{
//     console.log(ev);

// })
window.onscroll=(ev)=>{
    //console.log(ev);
    console.log("scroll");
    if(window.scrollY>300){
        navBar.style.backgroundColor="orange";

    }
    else{
        navBar.style.backgroundColor="white";
    }
}