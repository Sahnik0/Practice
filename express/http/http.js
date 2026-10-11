const http = require('http')

const server = http.createServer((req,res) => {
    // res.write("HIII") //Returns HIII on GET 
    // res.end()
    // console.log(req)

    if (req.url === '/'){
        res.end("This is home page end point")
    }
    else if(req.url === '/about'){
        res.end("This is about page end point")
    }
    else{
        res.end("OOPS this end point doesn't exit")
    }
})

server.listen(5000)