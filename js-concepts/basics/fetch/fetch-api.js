//Basic API fetch
fetch('https://jsonplaceholder.typicode.com/posts/1',{})
// .then(response => console.log(response))
// .catch(error => console.log(error))

//Converting to JSON
.then(response => response.json()) // At first it converts to json
.then(data => console.log(data)) //Then it console logs the converted json
.catch(error => console.log(error))