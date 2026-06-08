let notes = document.getElementById("Notes")
let button = document.getElementById("btn")

function openDialouge(){
    let title = prompt("Enter the Title")
    console.log(title)
    let text = prompt("Enter the Text")
    console.log(text)

    let note = document.createElement("div")
    note.className = "note"

    let element = document.createElement("p")
    let elementTitle = document.createElement("h2")

    element.innerText = text
    elementTitle.innerText = "📌 " + title

    localStorage.setItem(Title,title)
    localStorage.setItem(Text1,text)
    


    note.appendChild(elementTitle)
    note.appendChild(element)
    notes.appendChild(note)
}


// window.onload = function() {
// localStorage.getItem(title)
// localStorage.getItem(text)
//     let note = document.createElement("div")
//     note.className = "note"
//     let element = document.createElement("p")
//     let elementTitle = document.createElement("h2")

//     element.innerText = text
//     elementTitle.innerText = "📌 " + title

//     note.appendChild(elementTitle)
//     note.appendChild(element)
//     notes.appendChild(note)
// }
