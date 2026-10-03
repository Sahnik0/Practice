//forEach() is used to iterate over elements of an array
//and apply a specific function (callback) to each ele

//array.forEach(callback)
//element, index, array are provided

let num = [1,2,3,4,5,6,7]

num.forEach(printNum)

function printNum(ele){
    console.log(ele)
}