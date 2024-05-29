let body=document.querySelector('body');
let navBar=document.querySelector('.navBar');

function scrollKaFunction(){
    console.log("scrolling")
}

window.addEventListener('scroll',debounce(scrollKaFunction,1000));
function debounce(fun,delay){
    let id;
    return function(){
        console.log("clearing interval",id);
        clearTimeout(id);
        id=setTimeout(()=>{
            fun ();
            
        });
        console.log("New Interval id",id);
            
    }

}

