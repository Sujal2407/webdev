const path=require('path');
const express=require('express');
const app=express();
const PORT=4444;
const {MongoClient }=require('mongodb');
const { mongoConnect } = require('./connection/mongo');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));

//connection url
const url = 'mongodb://127.0.0.1:27017';
const client=new MongoClient(url);

let cbDB=undefined;
async function main(){
    if(cbDB !=undefined) return cbDB;

    //use connect method to connect to the server
    await client.connect();

    console.log('connected sucesfully to server');
    cbDB=client.db("coding blocks");
    return 'done. ';

}

main()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    });
})
.catch(err=>{
    console.log("error aa gaya DB connection mei")
})