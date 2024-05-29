let movies=document.querySelectorAll('.movie');
let body=document.querySelectorAll('body');
// movies.forEach((item)=>{
//     item.style.color = 'red';
//     item.style.fontSize = '30px';
//     item.style.backgroundColor = 'black';
//     item.style.listStyle = 'none';
// })
let x=1;
setInterval(() => {
    x=1-x;
    if(x){
        body.style.backgroundColor='white';
        body.style.color='blue';
    }
    else{
        body.style.backgroundcolor='white';
        body.style.color='black';
    }
},1000);