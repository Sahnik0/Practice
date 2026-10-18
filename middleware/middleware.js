const express = require('express')
const app = express()
const port = 5000

// req => middleware => res

//middleware fucn
const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const confirmation = 

    console.log(method,url)
    next() //Have to write this at the end of the middleware
           //Or just return anything using res.end()
}

app.get('/',logger,(req,res)=>{
    res.end("This is home directory")
})

app.listen(port,()=>{
    console.log(`app is listening to ${port}`)
})