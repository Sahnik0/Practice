const products = 
    [
  {
    "id": 101,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 45,
    "ratings": 4.3,
    "tags": ["wireless", "computer", "accessory"]
  },
  {
    "id": 102,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 2499,
    "stock": 12,
    "ratings": 4.7,
    "tags": ["mechanical", "gaming", "keyboard"]
  },
  {
    "id": 103,
    "name": "Programming in JavaScript",
    "category": "Books",
    "price": 599,
    "stock": 0,
    "ratings": 4.5,
    "tags": ["programming", "javascript", "education"]
  },
  {
    "id": 104,
    "name": "USB-C Hub",
    "category": "Accessories",
    "price": 1299,
    "stock": 30,
    "ratings": 4.1,
    "tags": ["usb", "laptop", "connectivity"]
  }
]

const user = [
  {
    "id": 1,
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "age": 21,
    "role": "student",
    "skills": ["JavaScript", "React", "Node.js"],
    "isActive": true,
    "address": {
      "city": "Kolkata",
      "state": "West Bengal",
      "country": "India"
    }
  },
  {
    "id": 2,
    "name": "Priya Das",
    "email": "priya@example.com",
    "age": 23,
    "role": "developer",
    "skills": ["Python", "Flask", "MongoDB"],
    "isActive": true,
    "address": {
      "city": "Delhi",
      "state": "Delhi",
      "country": "India"
    }
  },
  {
    "id": 3,
    "name": "Amit Roy",
    "email": "amit@example.com",
    "age": 20,
    "role": "student",
    "skills": ["Java", "SQL"],
    "isActive": false,
    "address": {
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    }
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "email": "sneha@example.com",
    "age": 25,
    "role": "admin",
    "skills": ["Node.js", "Express.js", "PostgreSQL"],
    "isActive": true,
    "address": {
      "city": "Bengaluru",
      "state": "Karnataka",
      "country": "India"
    }
  },
  {
    "id": 5,
    "name": "Arjun Sen",
    "email": "arjun@example.com",
    "age": 22,
    "role": "developer",
    "skills": ["React", "TypeScript", "Node.js"],
    "isActive": true,
    "address": {
      "city": "Kolkata",
      "state": "West Bengal",
      "country": "India"
    }
  }
]

module.exports = {products,user}