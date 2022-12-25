const express = require('express')
const cors=require("cors")
const port = 5000 || process.env.PORT 
const app =require("./app")
const mongoose = require('mongoose')

require('dotenv').config()


mongoose.connect('mongodb+srv://admin-isfak:<password>@cluster0.foygf8d.mongodb.net/?retryWrites=true&w=majority/tommorrow-school',{ useNewURLParser : true }).then(()=>{
  console.log("database connected")
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
