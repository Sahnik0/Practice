const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json()) //handles json formats
const port = 5000

app.post('/user',(req,res)=>{
    const {name,age} = req.body
    if(name){
        return res.status(200).json({name: name, age: age,msg: `Holaa ${name} !!. Your age is ${age}`})
    }else{
        return res.status(400).json("No data found")
    } 
})

app.listen(5000,()=>{
    console.log(`Server is running at ${port}`)
})