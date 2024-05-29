//constructor function
function student(name ,age,marks){
    this.name=name;
    this.marks=marks;
    this.isBaalik=function(){
        return age>=18;
    }
}

student.prototype.printdetails=function(){
    console.log(`Name: ${this.name},
    age:${this.age},marks:${this.marks}`);
}

let uday=new student("Uday",20,95);
let keshav=new student("keshav",15,80);

if(keshav.isBaalik()){
    console.log("baalik hai");
}
else{
    console.log("na baalik hai");

}

console.log(uday);
console.log(keshav);
