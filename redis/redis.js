const express = require('express')
const app = express()
const Redis = require('ioredis')
// const redis = new Redis()
const username = "Sahnik0"

app.use(express.json())

app.get('/',async(req,res) => {
    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        
        if(!response.ok){
            return res.status(response.status).json({
                error: 'Faied to fetch'
            })
        }

        const {login,id,public_repos} = data = await response.json() 
        
        return res.json({User:login, ID:id, PublicRepoNum:public_repos})
        console.log(data)

    }catch(err){
        console.error(err)
    }
    
})

app.listen(5000)