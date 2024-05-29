function hello(){
    console.log(this);
    function world(){
        console.log(this);
    }
    world ()
}
let person={
    name:"chandan",
    age:20
}
hello.call(person);
