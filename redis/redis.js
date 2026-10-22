const express = require('express')
const Redis = require('ioredis')

const app = express()
const redis = new Redis()
app.use(express.json())

app.get('/',async(req,res)=>{
    const key = `limit:${req.ip}`
    const count = await redis.incr(key)

    if(count === 1){
        await redis.expire(key,60)
        console.log("created")
        return res.status(200).json({message: "in imit"})
    }

    if(count > 5){
        return res.status(429).json({message: "Too many message"})
    }
    
})

app.listen(5000)