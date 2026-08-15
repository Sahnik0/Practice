let question = document.getElementById("question")
let quiz = document.getElementById("quiz")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")
let check = document.getElementById("check")
let userInput = ""
let options = []
const correctOption = localStorage.getItem("correctOption");

function addQuestion(){
    console.log("Question Added")
    userInput = prompt("Enter your the question:");
    for(i=0; i<=3; i++){
        options.push(prompt(`Enter option ${i+1}:`));
    }
    question.innerText = userInput   
    option1.innerText = options[0]
    option2.innerText = options[1]
    option3.innerText = options[2]
    option4.innerText = options[3]

    const correctOption = prompt("Enter the correct option number (1-4):");
    localStorage.setItem("question", userInput);
    localStorage.setItem("option1", options[0]);
    localStorage.setItem("option2", options[1]);
    localStorage.setItem("option3", options[2]);
    localStorage.setItem("option4", options[3]);
    localStorage.setItem("correctOption", correctOption);
    
    question.innerText = localStorage.getItem("question", userInput);
    localStorage.getItem("option1", options[0]);
    localStorage.getItem("option2", options[1]);
    localStorage.getItem("option3", options[2]);
    localStorage.getItem("option4", options[3]);
}

function checkAnswer(){
    if(check.value === correctOption){
        alert("Correct Answer!")
    } else {
        alert("Wrong Answer! Try Again.")
    }
}