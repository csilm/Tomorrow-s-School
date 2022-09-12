const express = require('express')
const app = express()
const cors=require("cors")
const port = 5000
require('dotenv').config()

app.use(cors());
 app.use(express.json())
 
//  need database related access 

// for contact page


app.get("/contact",(req,res)=>{
    res.send("contact page")
})
app.post ("/contact",(req,res)=>{
    res.send("contact add")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
