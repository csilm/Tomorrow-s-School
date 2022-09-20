const express = require('express');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const cors = require("cors");

const app = express();

//middleware
app.use(express.json())
app.use(cors())


//routes
function donate() { 
    app.post("/donation", (req, res)=>{
        const {data, token}=req.body;
        console.log("data", data);
        console.log("Price", data.amount);
        // const idempontencyKey = uuid();
    
        // return stripe.customers.create({
        //     email: token.email,
        //     source: token.idempontencyKey
        // }).then(customer =>{
        //     stripe.charges.create({
        //         amount: data.amount * 100,
        //         currency : 'usd',
        //         customer : customer.id,
        //         receipt_email : token.email,
        //         description: `Donated amount is ${product.name} $`,
        //         shipping:{
        //             name: token.card.name,
        //             address:{
        //                 country : token.card.address_country
        //             }
        //         }
        //     }, {idempontencyKey})
        // }).then(result => res.status(200).json(result))
        // .catch(err=> console.log(err))
    })
 }



module.exports=donate