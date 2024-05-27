const mongoose = require('mongoose');
require('dotenv').config()
//URI = "mongodb+srv://avisek338:Babla%40123@cluster0.7bjqdcv.mongodb.net/"

mongoose.connect(process.env.URL)
const db = mongoose.connection
db.on('connected',()=>{
    console.log("Connected to mongoDB server");
})
db.on('error',(e)=>{
    console.log("MongoDB connection error:",e);
})
module.exports =   db
