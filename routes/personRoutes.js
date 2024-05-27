const express = require("express");
const router   = express.Router();
const person = require("../person.js")
router.post('/',async(req,res)=>{
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

router.get('/',async(req,res)=>{
    try{
      const data = await person.find();
      console.log('data fecthed successfully');
      res.status(200).json(data);  
    }catch(e){
        console.log(e)
        res.status(500).json({error:'inernal server error'})
    }
})
router.get('/:workType',async(req,res)=>{
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
router.put('/:id',async(req,res)=>{
    try{
   const personId = req.params.id
   const updatedPersonData = req.body
   const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
     new:true,//Return the uupdated document 
     runValidators:true//Run Mongoose validation
   })
     if(!response){
         return res.status(404).json({error:"Person data not found"})
     }
     console.log('data updated')
     res.status(200).json({response})
    }catch(e){
        console.log(e)
        res.status(500).json({error:"Internal server error"})
    }
 })
router.delete("/:id",async(req,res)=>{
    try{
      const personId = req.params.id
      const response = person.findByIdAndDelete(personId)
      console.log("data deleted sucessfully")
      res.status(200).json({sucess:"data deleted "})
    }catch(e){
       console.log(e)
       res.status(500).json({error:"server error"})
    }
}) 
module.exports = router