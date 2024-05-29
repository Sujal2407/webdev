const btn=document.querySelector('button');
const ul=document.querySelector('ul');

function getdata(url){
    return new Promise((resolve,reject) => {
        //1. create the XML Http request object
        let xml=new XMLHttpRequest();

        //2.setup krna request ko
        //let url ='https://cat-fact.herokuapp.com/facts';
        xml.open('GET',url);
        
        //3.success hone par request ke kya krna h?
        xml.onload = (res) => {
            let data = JSON.parse(res.target.response);
            resolve(data);
        }
        //4. failure hone par request ke kya krna hai
        xml.onerror = (err) =>{
            reject(err);
        }

        xml.send ();//request bhej do
    })
}

btn.addEventListener('click' ,()=>{
    getdata('https://cat-fact.herokuapp.com/facts')
        .then((data)=>{
            ul.innerText = '';
            data.forEach((d)=>{
                //console.log(d.text)
                let li=document.createElement('li');
                li.innerText=d.text;
                ul.appendChild(li);
            })
        }).catch(err=>{
            console.log(err)
        })
})