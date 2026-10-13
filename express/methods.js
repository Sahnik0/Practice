const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log("Data is req")
    res.end("Here is your data")
})

app.get('/about',(req,res)=>{
    res.end("Here is your about data")
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000")
})