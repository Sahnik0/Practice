//Using http
// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log("req is made")
//     res.end("Printing the req")
// })

// server.listen(5000, ()=>{ //This is an async so server keeps running
//     console.group("Listening to 5000....")
// })

//Using express
const express = require('express')
const app = express()

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})