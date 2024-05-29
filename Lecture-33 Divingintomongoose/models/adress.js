const mongoose=require('mongoose');
const {schema}=mongoose;

const adressschema=new schema({
    details:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('adress',adressschema);