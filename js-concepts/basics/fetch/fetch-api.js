//Basic API fetch
fetch('https://www.youtube.com/watch?v=OFpqvaJ3QYg',{})
// .then(response => console.log(response))
// .catch(error => console.log(error))

//Converting to JSON
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))