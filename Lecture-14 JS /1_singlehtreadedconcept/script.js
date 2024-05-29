//lets create a finction to add 1 sesc delay 
//endtime-startime<=1 sec
function delayonesec(){
    let currenttime=new Date().getTime();
    while(new Date().getTime()-currenttime<1000){

    }
}
function delaynsec(n){
    for(let i=0;i<n;i++){
        delayonesec();
    }
}
delaynsec(1);
console.log("Hello world");
delaynsec(2);
console.log("Hello world");
delaynsec(3);
console.log("Hello world");
delaynsec(4);
delaynsec(5);
delaynsec(6);
console.log("Hello world");