//For Event Loop the first thing that gonna execute is the synchronous code, 
//then the asynchronous code will execute after the synchronous code.

console.log("First") //This gonna print first

setTimeout(() => {
    console.log("Second") //This gonna execute at the end
}, 0)

console.log("Third") //This gonna execute after the "First"

