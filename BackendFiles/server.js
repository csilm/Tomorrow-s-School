const express = require('express')
const cors=require("cors")
const port = process.env.PORT 
const app =require("./app")
const mongoose = require('mongoose')
const mongodburl = "mongodb+srv://admin-isfak:<Test123>@cluster0.foygf8d.mongodb.net/?retryWrites=true&w=majority"
require('dotenv').config()

mongoose.set('strictQuery', true);

mongoose.connect(mongodburl,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log("database connected")
})




app.listen(port, () => {
  console.log(`Example app listening at port ${port}.`)
})
