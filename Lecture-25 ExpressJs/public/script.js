const btn=document.querySelector('button');
const inp=document.querySelector('input');

btn.addEventListener('click',async(ev)=>{
    //yeh html ke default behaviour ko hone se rokk deta hai
    ev.preventDefault();

    //yaha se ajax ki request bhej skte hai
    try{
        let{data}=await axios.get('/getask?task=${inp.value}')
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
})