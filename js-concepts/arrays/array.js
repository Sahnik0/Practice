let fruits = ["apple","orange","banana"];

console.log(fruits[0]) //Will print apple

//Altering in array

fruits[0] = "banana" //Replace apple with banana

fruits.push("coco") //Push an element at the end

let numOfFruits = fruits.length; //Length of the array

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]) //Loop over the array
}

//shortcut syntax of for loop
for(let fruit of fruits){
    console.log(fruit)
}

//sort an array

fruits.sort()
fruits.sort().reverse()