const numbers = [5,10,15,20,25,30];

const filteredNumbers = numbers.filter((number) => number > 10 );
console.log(filteredNumbers);

const users = [
  {name: "Alex", age: 26},
  {name: "Carlos", age: 25},
  {name: "John", age: 27}
]; 
const olderThan25 = users.filter((user)=> user.age > 25);
console.log(olderThan25);


const mixedNumbers = [2,4,5,6,8,78,6,4,56,78,98,3,35,57];
const evenNumbers = mixedNumbers.filter((number)=> number % 2 ===0);
console.log(evenNumbers);