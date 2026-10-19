const express = require('express')
const app = express()
const route = require('./router')

app.use('/api',route)

app.listen(5000,()=>{
    console.log(`Server is running at ${port}`)
})