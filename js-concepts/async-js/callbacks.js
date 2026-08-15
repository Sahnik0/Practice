//Callbacks : Functions passed as arguments to other functions

// Example of a callback function
function greet(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = 'John Doe';
    callback(name);
}

// Passing the greet function as a callback
processUserInput(greet);




// Callbacks with setTimeout to simulate asynchronous behavior
function firstFunction(callback) {
    setTimeout(function() {
        console.log('First function executed');
        callback();
    }, 1000);
}

function secondFunction() {
    console.log('Second function executed');
}

// Calling the first function and passing the second function as a callback
firstFunction(secondFunction);  




//Callback Hell example
function doSomething(callback) {
    setTimeout(function() {
        console.log('Doing something...');
        callback();
    }, 1000);
}

function doSomethingElse(callback) {
    setTimeout(function() {
        console.log('Doing something else...');
        callback();
    }, 1000);
}

function doAnotherThing(callback) {
    setTimeout(function() {
        console.log('Doing another thing...');
        callback();
    }, 1000);
}


// Nested callbacks leading to "callback hell"
doSomething(function() {
    doSomethingElse(function() {
        doAnotherThing(function() {
            console.log('All tasks completed!');
        });
    });
});