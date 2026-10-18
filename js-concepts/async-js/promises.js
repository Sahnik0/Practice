//Promises : Objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.
//Promises have three states: pending, fulfilled, and rejected.

const promise = new Promise((resolve,reject) => {
    const isBoy = true

    if(isBoy){
        resolve("This is a boy")
    }else{
        reject("This is not a boy")
    }
});

console.log(promise)


//.then() and .catch()
promise.then((value) => {
    console.log(value) //gonna print the content/value inside resolve
    //For this it's gonna return "This is a boy"
}).catch((error) => {
    console.log(error) //Same as .then but return value of reject
});


//Promise.all() is used when you have multiple independent asynchronous tasks 
// and you want to run them at the same time and wait until all of them finish.

app.get("/dashboard", async (req, res) => {
    const [user, posts, notifications] = await Promise.all([
        getUser(),
        getPosts(),
        getNotifications()
    ]);

    res.json({
        user,
        posts,
        notifications
    });
});

//Promise.all() fails if any one Promise rejects: