let fruits = ["apple", "banana", "Orange", "Mango"];
console.log(fruits);
console.log(fruits[0]); // apple

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[2]); // 3

let mixedArray = [1, "two", true, null, { key: "alex" }, [1, 2, 3]];
console.log(mixedArray);
console.log(mixedArray[4]["key"]); // alex
console.log(mixedArray[4].key); // alex

console.log(mixedArray[5][1]); // 2

let numbersArray = new Array(6, 7, 8, 9, 10); // Creating an array using the Array constructor
console.log(numbersArray); 

let newFFruits = [...fruits, "kiwi", "pear"]; // Using spread operator to create a new array
console.log(newFFruits); // ["apple", "banana", "Orange", "Mango


fruits.push("grape"); // Adding an element to the end of the array
console.log(fruits); // ["apple", "banana", "Orange", "Mango", "grape"]

fruits.pop(); // Removing the last element from the array
console.log(fruits); // ["apple", "banana", "Orange", "Mango"]
