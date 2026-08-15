//Rest (Helps to dynamically take inputs in a fucn)

//Syntax

const sum = (...numbers) =>{
    let total = 0;
    numbers.forEach(numbers => total+=numbers)
    return total
}

const ans = sum(1,2,3) //You can dynamically ad or remove value

console.log(ans)