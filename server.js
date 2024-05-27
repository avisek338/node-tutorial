const express  = require("express");
const app = express();
const db = require('./db.js');
const  person = require('./person.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json()) // req.body

app.get("/",(req,res)=>{
  res.send("Well come to my page")
})

app.post('/Person',async(req,res)=>{
    try{
       const data = req.body 
       const newPerson  = new person(data)
       const response = await newPerson.save()
       console.log('data saved')
       res.status(200).json(response)
    }catch(e){
        console.log(e)
        res.status(500).json({error:'inernal server error'})
    }
})
app.get('/Person',async(req,res)=>{
    try{
      const data = await person.find();
      console.log('data fecthed successfully');
      res.status(200).json(data);  
    }catch(e){
        console.log(e)
        res.status(500).json({error:'inernal server error'})
    }
})
app.get('/Person/:workType',async(req,res)=>{
    try{
       const workType = req.params.workType
       const response = await person.find({work:workType})
       console.log("response fetched")
       res.status(200).json(response)
    }catch(e){
       console.log(e)
       res.status(500).json({error:'Invalid server error'})
    }
})
app.listen(3000,()=>{
    console.log("server is running at port: ",3000);
})

