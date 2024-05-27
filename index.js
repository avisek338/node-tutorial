const express  = require("express");
const app = express();
const db = require('./db.js');
const  person = require('./person.js');
const menu =  require('./menu.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json()) // req.body

app.get('/',(req,res)=>{
    res.send('Hello world') 
})

app.post('/Menu',async(req,res)=>{
    try{
     const data = req.body
     const newMenu = new menu(data);
     const response = await newMenu.save();
     console.log('data saved successfully',response);
     res.status(200).json(data); 
    }catch(e){
      console.log("server error",e);
      res.send(500).json({error:'error saving the data'});
    }
})
app.get('/Menu',async(req,res)=>{
    try{
        const response = await menu.find()
        console.log('data fetched successfully')
        res.status(200).json(response)
    }catch(e){
        console.log('server error',e)
        res.status(500).json({error:"data not found"});
    }
})

const personRoutes = require("./routes/personRoutes.js")
app.use('/person',personRoutes);

app.listen(3000,()=>{
    console.log('server is running at port:',3000)
})
