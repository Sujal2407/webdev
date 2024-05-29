let obj={
    a:1,
    b:2,
    fun:function(){
        console.log(this);
        console.log("a",this.a);
        console.log("b",this.b);
        //adding another key 'c'
        this.c='hello';
    }
}

//dot operator se call krne obj.fun() par function ko,function ke andar ka this
//point krta hia'obj' object ko
obj.fun();
console.log(obj);
