function hello(state,country){
    console.log("name",this.name);
    console.log("hobby",this.hobby);
    console.log("state",state );
    console.log("country",country);

}

let person1={
    name:'harsh',
    hobby:"codding"
}
let person2={
    name:'sibam paul',
    hobby:'cooking'
}