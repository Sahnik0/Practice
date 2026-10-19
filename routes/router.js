const express = require('express')
const router = express.Router()

router.get('/data',(req,res)=>{
    res.json([{name : "sahnik"},{roll : 88}]) //return data in json format
})

module.exports = router