const { rejects } = require('assert')
const {readFile,writeFile} = require('fs')

const getText = (path) => {
    return new Promise((res,rej)=>{
        readFile(path, 'utf-8', (err,data) => {
            if(err){
                rej(err)
            }else{
                res(data)
            }
        })
    })
}

getText('./express/testContents/test1.txt')
.then((result) => console.group(result))
.catch((err) => console.log(err))