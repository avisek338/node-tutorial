const mongoose  =  require("mongoose");

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    }
});
const person = mongoose.model('Person',personSchema);
module.exports =  person
