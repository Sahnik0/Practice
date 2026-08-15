//Spread (It works like inheritance)
const defaults = {color:"blue", size:"medium"} //Defining obj
const product = {...defaults,name:"package",num:12}

console.log(product) //This gonna work like inheritance and print the entire obj at a time

//Array example
const number = [1,2,3]
const moreNumber = [...number,4,5]

console.log(moreNumber) //Gonna print the entire array including the original array