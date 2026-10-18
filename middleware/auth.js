const auth = (req,res,next) => {
    const {user} = req.query
    if(user === "admin"){
        req.user = {name:'Sahnik',id:88}
        console.log(req.user)
        next()
    }else{
        res.status(401).send('No noo')
    }
}

module.exports = auth