let list = document.getElementById("list")
let button = document.getElementById("button")
let input = document.getElementById("input")
let count = 0
let task = document.getElementById("task")

button.addEventListener('click', (event) => {
    event.preventDefault()

    if (input.value == "") {
        alert("Kindly put anything")
    } else {

        let element = document.createElement("li")
        let cb = document.createElement("input")
        let dl = document.createElement("button")

        dl.innerText = "Delete"
        cb.type = "checkbox"

        element.innerText = input.value

        element.appendChild(cb)
        element.appendChild(dl)
        list.appendChild(element)

        input.value = ""

        dl.addEventListener("click",()=>{
            element.remove()
        })

        cb.addEventListener("change",()=>{
            if(cb.checked){
                count++
                console.log(count)
            }else{
                count--
                console.log(count)
            }
            task.innerText = `Num of tasks left : ${count}`

        })
        
    }
})

