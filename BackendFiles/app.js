
const express = require('express')
const app = express()
const cors = require("cors")
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mongoose = require('mongoose');
const { ObjectID, ObjectId } = require("mongodb");
const port = 5000
const dotenv = require('dotenv').config()


app.use(cors());
app.use(express.json())

// contact shcema design 


const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})



app.get("/", (req, res) => {
    try {
        res.send("contact page")
    } catch (error) {
        console.log(err);
    }
})


// post contact message to database 

const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", async (req, res) => {
    console.log(req.body);
    try {
        const contact = new Contact(req.body);
        const result = await contact.save();
        res.status(200).json({
            message: "data added successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            message: "error occured",
            error: error.message
        })
    }
})

const subscribeSchema = mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Subscribe = mongoose.model("Subscribe", subscribeSchema);

app.post("/subscribe", async (req, res)=>{
    console.log(req.body);
    try {
        const subscribe = new Subscribe(req.body);
        const result = await subscribe.save();
        res.status(200).json({
            message: "data added successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            message: "error occured",
            error: error.message
        })
    }
})

// donation schema design 

const donationSchema = mongoose.Schema({

    FullName: {
        type: String,


    },
    email: {
        type: String,

    },
    amount: {
        type: Number,

    },
    address: {
        type: String,

    }

}, {
    timestamps: true
})

const Donate = mongoose.model("Donate", donationSchema);

app.post("/donation", async (req, res) => {
    const { data, token } = req.body;
    try{
        stripe.customers.create({
            email: token.email,
            source: token.id
        }).then(customer => {
            stripe.charges.create({
                amount: data.amount * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: data.email,
                description: `Donated amount is ${data.amount} $`,
            })
        })
    }catch(err){
        console.log(err);
    }
    try {
        const donate = new Donate(req.body.data);
        const result = await donate.save();
        res.status(200).json({ message: "donation successful", data: result })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

})

app.get("/donation/:id",async(req,res)=>{
    const id=req.params.id;
  try {
    const success= await Donate.find({_id:id});
    console.log(success);
    res.status(200).json({
        message:"successful",
        data:success
    })
  } 
  catch (error) {
    
  }
})


module.exports = app