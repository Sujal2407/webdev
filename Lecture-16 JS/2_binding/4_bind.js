function hello(state,country){
    console.log("name",this.name);
    console.log("hobby",this.hobby);
    console.log("state",state);
    console.log("country",country);
}
let person1={
    name:'harsh',
    hobby:"coding"
}
let person2={
    name:'sibam paul',
    hobby:'cooking'
}
//bind immediately function ko call nahi karta
//insttant vo aapko function return kr deta hai that can be called
//later onn 
//let f=hello.bind(person1);
//f()

let f=hello.bind(person2,"person","canada");
f();