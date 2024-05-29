class student{
    constructor(name,age,marks){
        this.name=name;
        this.marks=marks;
        this.isbaalik=function(){
            return age>=18;
        }
    }
    printdetails(){
        console.log(`name : ${this.name},
        Age:${this.age },marks:${this.marks}`);
    }
}
let uday=new student("Uday",20,95);
let keshav=new student("kesahv",15,80);

if(uday.isbaalik()){
    console.log("is baalik")

}
else{
    console.log("nabaalik hai");
}
uday.printdetails();
keshav.printdetails();
console.log(uday);

// console.log(uday.__proto__==student.prototype);
// console.log(student.prototype);