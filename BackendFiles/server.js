const express = require('express')
const cors=require("cors")
const port = process.env.PORT 
const app =require("./app")
const mongoose = require('mongoose')
const mongodburl = "mongodb+srv://admin-isfak:<Test123>@cluster0.foygf8d.mongodb.net/?retryWrites=true&w=majority"
require('dotenv').config()

try {
  mongoose.set('strictQuery', true);
} catch (error) {
  console.log(error);
}

try {
  mongoose.connect(mongodburl,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("database connected")
  })
} catch (error) {
  console.log(error);
}





app.listen(port, () => {
  console.log(`Example app listening at port ${port}.`)
})
