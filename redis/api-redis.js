const express = require('express')
const app = express()
const Redis = require('ioredis')
const redis = new Redis()
const username = "Sahnik0"

app.use(express.json())

app.get('/',async(req,res) => {
    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const cacheKey = `github:${username}`

        const cacheData = await redis.get(cacheKey)

        if(cacheData){
            const data = JSON.parse(cacheData)
            console.log("Cache Hit")
            return res.json({User:data.login, ID:data.id, PublicRepoNum:data.public_repos})
        }

        console.log("Cache Miss")

        if(!response.ok){
            return res.status(response.status).json({
                error: 'Faied to fetch'
            })
        }

        
        const data = await response.json() 
        await redis.set(cacheKey,JSON.stringify(data),'EX',30)

        
        return res.json({User: data.login, ID: data.id, PublicRepoNum: data.public_repos})
        

    }catch(err){
        console.error(err)
    }
    
})

app.listen(5000)