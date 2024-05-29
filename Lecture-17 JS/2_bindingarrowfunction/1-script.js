let obj={
    a:1,
    b:2,
    fun:()=>{
        console.log(this);
        this.c="hello";
    }
}
obj.fun();
console.log(obj);