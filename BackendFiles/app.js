
const express = require('express')
const app = express()
const cors=require("cors")
const mongoose = require('mongoose')
const port = 5000
const dotenv= require('dotenv').config()


app.use(cors());
 app.use(express.json())

// contact shcema design 


const contactSchema= mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true

    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
})



app.get("/",(req,res)=>{
    res.send("contact page")
})


// post contact message to database 

const Contact= mongoose.model("Contact",contactSchema);

app.post("/contact",async(req,res,next)=>{
    try {
        const contact= new Contact(req.body);
        const result = await contact.save();
        res.status(200).json({
            message:"data added successfully",
            data:result 
             
        })
        
    } catch (error) {
         res.status(400).json({
            message:"error occured",
            error:error.message
         })
    }
})



module.exports=app