const path = require('path')

console.log(path.sep) //retruns platform specific separater like "/"

const filepath = path.join('express','testContents','test1.txt')
console.log(filepath) //express/testContents/test1.txt

const base = path.basename(filepath)
console.log(base) //Only gonna return test.txt

const dirName = path.resolve(__dirname)
console.log(dirName) //Prints dir path