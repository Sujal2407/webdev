let obj={
    a:1,
    b:2,
    fun:function(){
        console.log(this);
        this.a="hello";
    }
}

obj.fun();
console.log(obj);