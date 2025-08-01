const fruits = ["Apple", "Banana", "Orange"];
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

// let secondValue = fruits[1];
// let firstValue = fruits[0];

const numbers = [1,2,3,4,5,6];

let[firstNumber,,thirdNumber, ...restNumbers] = numbers;
console.log(firstNumber);
console.log(thirdNumber);
console.log(restNumbers);

const nestedarray = [1,[2,3],4];
const [first,[second,third], fourth] = nestedarray;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);