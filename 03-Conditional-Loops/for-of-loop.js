let fruits = ["apple", "banana", "Orange", "Mango", "Grapes"];
console.log(fruits[Symbol.iterator]); // This will log the iterator function for the array
console.log("string"[Symbol.iterator]); // This will log the iterator function for the string
console.log({}[Symbol.iterator]); // This will log undefined, as objects do not have a default iterator

for(let fruit of fruits) {
  console.log(fruit); // This will log each fruit in the array
}

const word = "Javascript";

for(let char of word) {
  console.log(char.toUpperCase()); // This will log each character in the string
}



// Example of using a for-of loop to iterate over an array and create a new array with descriptions
const colorArray = ["Red", "Green", "Blue", "Yellow"];
let colorDescriptions = [];


for ( let color of colorArray) {
    colorDescriptions.push(`The color is ${color}`);
}
console.log(colorDescriptions); // This will log the new array with color descriptions