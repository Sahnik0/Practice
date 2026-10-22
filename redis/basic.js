const express = require('express')
const app = express()
const Redis = require('ioredis')
const redis = new Redis()

app.use(express.json())
//Basic set and get syntax of redis

app.get('/',async (req,res)=>{
    await redis.set('name','sahnik')
    const value = await redis.get('name')
    res.json(value)
    
})

app.listen(5000)

