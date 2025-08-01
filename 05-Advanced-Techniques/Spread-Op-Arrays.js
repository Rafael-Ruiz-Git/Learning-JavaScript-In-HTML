let numbers = [1,2,3];
let moreNumbers = [4,5,6];


let combined = [...numbers, ...moreNumbers];
console.log(combined);

let fruits = ["Apple", "Banana", "Orange"];
let moreFruits = ["Grapes", ...fruits, "Pinapple"];
console.log(moreFruits);

let nestedArray = [
  [1,2],
  [3,4]
];

let copiedArray = [];
for(array of nestedArray) {
  copiedArray.push([...array]);
}


console.log(copiedArray);
nestedArray[0][0] =99;
console.log(nestedArray);
console.log(copiedArray);