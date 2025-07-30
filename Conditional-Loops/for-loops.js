let candies = 10; // Number of candies

for (let i = 1; i <= candies; i++) {
  console.log("Sticker applied to candy: " + i);
}

let fruits = ["Apple", "Banana", "Orange", "Mango"]; // Array of fruits
for(let fruit= 0; fruit <= fruits.length; fruit++) {
  console.log(fruits[fruit])
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
  for(let col = 0; col < matrix[row].length; col++) {
    console.log("Matrix Value:", matrix[row][col]);
  }
}

let totalSum = 0;
let numberDescriptions = [];
 

for (let i = 1; i <= 10; i++) {
    totalSum += i;
    numberDescriptions.push(`Number: ${i}`);
}
console.log("Total Sum:", totalSum);
console.log( numberDescriptions);