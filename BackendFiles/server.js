const express = require('express');
const app = express();


app.get("/", function (req, res) { 
    res.send('Hello Warriors');
 });

app.listen(3000, function () { 
    console.log("server started on port 3000");
 });