function demo1(callback) {
    setTimeout(() => {
        console.log("Demo 1 executed");
        callback()
    }, 2000)
}

function demo2(callback) {
    setTimeout(() => {
        console.log("Hii this is demo 2")
    }, 1000)
}

demo1(demo2)