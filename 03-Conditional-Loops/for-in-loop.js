let fruits = ["apple", "banana", "Orange", "Mango"];

for ( let index in fruits) {
  console.log(fruits[index]);
}

let car = {
  brand: "Toyota",
  model: "Corolla",
  color: "gray",
  year: 2020
};

for (let property in car) {
  console.log(property + ": " + car[property]);
}


const userData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
};
 
let propertyDescriptions = [];
 
// For in loop to iterate over properties
for (let key in userData) {
    if (userData.hasOwnProperty(key)) { // Check if the property is not from the prototype chain
        propertyDescriptions.push(`Property ${key} has value ${userData[key]}`);
        console.log(`Property ${key} has value ${userData[key]}`);
    }
}

//other way
let userData1 = {
    name: "Alex Ruiz",
    age: 26,
    email: "AlexRuiz@example.com"
};
 
let propertyDescriptions1 = [];
 
for (let key1 in userData1) {
  propertyDescriptions1.push(userData1[key1]);
    console.log(`Property ${key1} has value ${userData1[key1]}`);
}