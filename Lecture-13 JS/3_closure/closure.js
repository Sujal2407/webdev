function parent(){
    var x=1;
    function child(){
        x++;
        console.log(x);
    }
    return child;
}
let f=parent();
let f1=parent();
f();//2

f();
f();


f1();
f1();
f1();
