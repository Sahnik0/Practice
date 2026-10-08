const {readFileSync,writeFileSync} = require('fs')

const content = readFileSync('./express/testContents/test1.txt','utf-8')

console.log(content) //It will log the contents inside the txt file

writeFileSync('./express/testContents/test2.txt',`The result will be ${content}`) //It will create a file and write the content
//This will rewrite the entire stuff and put this content but will not append the content in that file
//To append use this {flag:'a'}. This gonna append the content.