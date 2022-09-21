
const express = require('express')
const app = express()
const cors=require("cors")
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
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


app.post("/donation", (req, res)=>{
    const {data, token}=req.body;
    console.log("data: ", data);
    console.log("token email: ", token.email);
    console.log("token id: ", token.id);

    return stripe.customers.create({
        email: token.email,
        source : token.id
    }).then(customer =>{
        stripe.charges.create({
            amount: data.amount * 100,
            currency : 'usd',
            customer : customer.id,
            receipt_email : data.email,
            description: `Donated amount is ${data.amount} $`,
        })
    }).then(result => res.status(200).json(result))
    .catch(err=> console.log(err))

})




module.exports=app