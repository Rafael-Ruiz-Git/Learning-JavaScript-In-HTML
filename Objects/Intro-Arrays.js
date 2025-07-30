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
