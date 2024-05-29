const { StringDecoder } = require("string_decoder");

class student{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    printdetails(){
        consol.log("name",this.name,",age ",this.age);

    }
    get studentname(){
        return this.name;
    }
    set studentname(name){
        this.name=name;
    }
}

let uday=new student("uday",20);
let keshav=new student("keshav",15);

uday.printdetails();
keshav.printdetails();

//getter and setter are function but we can use them as properties
uday.studentname="uday singh";
console.log("student name is : ",uday.studentname)