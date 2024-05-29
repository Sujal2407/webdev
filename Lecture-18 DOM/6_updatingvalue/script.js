let cntvalue=document.querySelector('.cntvalue');
let reducebtn=document.querySelector('.reduce');
let updatebtn=document.querySelector('.update');

updateBtn.addeventlistener('click',()=>{
    //console.log("update BTN clicked");
    //console.log(parseint(cntvalue,innertext)+2);
    //console.log((+cntValue.innert))
    cntvalue.innertext=parseint(cntvalue.innertxt)+1;

})
reducebtn.addeventlistener('click',()=>{
    //console.log("reduce BTN clicked");
    cntvalue.innertxt=parseint(cntvalue.innertxt)-1;
    
})