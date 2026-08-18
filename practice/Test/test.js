const promise = new Promise((resolve,reject) => {
    const isBoy = false

    if(isBoy){
        resolve("This is a boy")
    }else{
        reject("This is not a boy")
    }
});

console.log(promise)