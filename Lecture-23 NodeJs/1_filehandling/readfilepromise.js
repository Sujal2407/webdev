const fs=require('fs/promises');
const filepath=__dirname+'/database/data.json';


function getData(filepath){
    return new promise(async(resolve,reject) => {
        try{
            let data=await fs.readfile(filepath);
            data=JSON.parse(data);
            resolve(data);
        }
        catch(err){
            reject(err);
        }
    })
}

getdata(filepath)
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })