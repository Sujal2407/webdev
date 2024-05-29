const btn=document.querySelector('button');
const ul=document.querySelector('ul');

function getData(url){
    return new Promise((resolve,reject) => {
        fetch(res=>{
            return res.json();
        }).then(data=>{
            resolve(data);
        })
        .catch(err=>reject(err));
    })
}

btn.addEventListener('click',() => {
    getData('https://cat-fact.herokuapp.com/facts')
        .then((data)=>{
            ul.innertext ='';
            data.forEach((d)=>{
                //console.log(d.text)
                let li=document.createElement('li');
                li.innertext=d.text;
                ul.appendChild(li);
            })
        }).catch(err=>{
            console.log(err);
        })
})