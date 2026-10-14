const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    console.log("Data is req")
    res.end("Here is your data")
})

app.get('/data',(req,res)=>{
    res.json(products) //return the entire json data
})

app.get('/api/products/data',(req,res)=>{
    const newData = products.map((product)=>{
        const{id,name,ratings} = product
        return {id,name,ratings}
    })

    res.json(newData) //returning selected fields
})

app.get('/api/products/data/:productId',(req,res)=>{
    const {productId} = req.params

    const singleProduct = products.find((product) => product.id === Number(productId))
    res.json(singleProduct)
})

app.get('/hdata',(req,res)=>{
    res.json([{name : "sahnik"},{roll : 88}]) //return data in json format
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000")
})