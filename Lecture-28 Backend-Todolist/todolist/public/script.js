let form =query.selector('form');
let input=document.queryselector('input');
let tasklist=document.querySelector('.tasklist');

async function loadinitialtask(){
    let {data}=await axios.get('/todos');
    addtolist(data);
}

loadinitialtask();

function addtolist(tasks){
    tasklist.innertext=" ";

    tasks.foreach(t=>{
        let li=document.createElement("li");
        li.classList.add('taskitem');
        li.innerHTML=`
        <div class="taskContent">${t}</div>
        <div class="btnGroups">
            <button class="upBtn">↑</button>
            <button class="downBtn">↓</button>
            <button class="deleteBtn">❌</button>
        </div>`;
        taskList.appendChild(li);
        
    })
    input.value="";
}

taskList.addeventListener('click' ,async(ev)=>{
    let item=ev.target;
    try{
        if(item.classList.contains('upbtn')){
            let taskname=item.parentelement.previouselementsibling.innertext;
            let {data}=await axios.get(`/increase?name=${taskname}`);
            addtolist(data);

            
        }
        else if(item.classList.contains('downbtn')){
            let taskname=item.parentelement.previouselementsibling.innertext;
            let {data}=await axios.get(`/decrease?name=${taskname}`)
            addtolist(data);
        }
        else if(item.classList.contains('deletebtn')){
            let taskname=item.parentelement.previouselementsibling.innertext;
            let {data}=await axios.get(`/deletetask?name=${taskname}`);
            addtolist(data);
        }
    }catch(err){
        console.log(err);
    }


})

form.addeventListener('submit',async(ev)=>{
    ev.preventdefault();
    let newtask=input.value;
    try{
        let {data}=await axios.post('/todos',{newtask });
        //console.log(data);
        addtolist(data);
    }
    catch(err){
        console.log(err);
    }
})