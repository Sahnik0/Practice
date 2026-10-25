const mongoose = require('mongoose')
const User = require('./schema')
require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

async function mongo() {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongo Connected')
    }catch(err){
        console.log("Mongo ERR :",err)
    }
}
mongo()

app.post('/api/user',async (req,res)=>{
    try{
        const user = await User.create({
            name: req.body.name,
            roll: req.body.roll
        })

        res.status(201).json(user)
    }catch(err){
        res.status(400).json({message: "Error while creating user", err})
    }
})

app.listen(5000)

