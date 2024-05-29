console.log("hello");

function sendreq(){
    axios.post('/submit-form',{
        username:'kartik',
        password:'kartik'
    })
    .then(({data})=>{
        console.log(data);

    })
    .catch(err=>{
        console.log(err);
    })
}

sendreq();
