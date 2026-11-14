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
//POST
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
//GET
app.get('/api/fetch-data',async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.status(404).json({message: "Mongo error"})
    }
})
//DELETE
app.delete('/users/delete', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({
            email: req.query.email
        });

        //const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        return res.json({
            message: 'User deleted successfully',
            user
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000)

