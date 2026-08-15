//Suppose there is an object
const person = {
    name : "Sahnik",
    age : 21,
    city : "kolkata"
}

// Now access this object normally 
const name = person.name
console.log(name) //Will print Sahnik



//Now let's understand DESTRUCTURING
const{name,age} = person //Using this you can destructure an obj 
//Here you have to keep the name od the var same as in the parent obj

 console.log(name) //Will print Sahnik


 //Example with array
const fruit = ["apple","banana","mango"]
const [first,second,third] = fruit

console.log(first) //Will print apple