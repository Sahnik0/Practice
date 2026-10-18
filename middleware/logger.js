//middleware fucn
const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const response = res

    console.log(method,url)
    next()
}

module.exports = logger