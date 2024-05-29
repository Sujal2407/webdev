let body=document.querySelector('body');
let btn=document.querySelector('.btn');

function clickHandler(){
    console.log("clicked");
}
btn.addEventListener('click',throtting(clickHandler,2000));

function throtting(fun, delay){
    let initialTime=0;
    return function(){
        if(new Date.getTime()-initialTime>=delay){
            initialTime=new Date().getTime();
            fun();

        }
        else{
            //console.log

        }
    }
}