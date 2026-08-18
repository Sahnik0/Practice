// Async and Await

const preHeatOven = () => {
    return new Promise((resolve,reject) => {
        const data = true

        setTimeout(() => {
            if(data){
                resolve("Data is available at first")
            }else{
                reject("Data not found at first")
            }
        },5000)
        
    })
};

const middleHeatOven = () => {
    return new Promise((resolve,reject) => {
        const data = false

        setTimeout(() => {
            if(data){
                resolve("Data is in the middle")
            }else{
                reject("Data is rejected")
            }
        },100)
    })
}

const endHeatOven = () => {
    const data = true

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            if(data){
                resolve("End of the data")
            }else{
                reject("error in the end")
            }
        },10)
    })
}

const baking = async () => {
    const first = await preHeatOven();
    console.log(first)

    const second = await middleHeatOven();
    console.log(second)

    const third = await endHeatOven();
    console.log(third)
}

baking()