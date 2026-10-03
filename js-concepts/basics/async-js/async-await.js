// Async and Await

const preHeatOven = () => {
    return new Promise((resolve,reject) => {
        const data = true

        setTimeout(() => {
            if(data){
                resolve("1 Data is available at first")
            }else{
                reject("1 Data not found at first")
            }
        },5000)
        
    })
};

const middleHeatOven = () => {
    return new Promise((resolve,reject) => {
        const data = false

        setTimeout(() => {
            if(data){
                resolve("2 Data is in the middle")
            }else{
                reject("2 Data is rejected")
            }
        },100)
    })
}

const endHeatOven = () => {
    const data = true

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            if(data){
                resolve("3 End of the data")
            }else{
                reject("3 error in the end")
            }
        },10)
    })
}

// Here it will execute one by one means without completing the first request it is not gonna move to the next. 
const baking = async () => {
    const first = await preHeatOven();
    console.log(first)

    const second = await middleHeatOven();
    console.log(second)

    const third = await endHeatOven();
    console.log(third)
}

baking()