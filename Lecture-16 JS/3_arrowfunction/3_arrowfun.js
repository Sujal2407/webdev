let hello=(name)=>{
    console.log("name",name);
    console.log("A",this.a);
}
this.a=10;
hello("kartik");