const express = require('express')
const app = express()
const logger = require('./logger')
const auth = require('./auth')
const port = 5000

// req => middleware => res

// app.use(logger) //Using logger fucn to every existing path
//app.use('/api',logger) //Apply to specific end points
//app.use([logger,auth]) //Apply multiple middlewares

app.use('/admin',[auth,logger])

app.get('/',logger,(req,res)=>{
    res.end("This is home directory")
})

app.get('/admin',(req,res)=>{
    res.end("Hello Admin !!")
})

app.listen(port,()=>{
    console.log(`app is listening to ${port}`)
})