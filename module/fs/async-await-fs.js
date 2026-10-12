const {readFile,writeFile} = require('fs').promises

const getFile = async(path,path1) => {
    try{
        const first = await readFile(path,'utf-8')
        const second = await readFile(path1,'utf-8')

        console.log(first)
        console.log(second)
        
    }catch(error){
        console.log(error)
    }
}

getFile('express/testContents/test1.txt','express/testContents/test2.txt')