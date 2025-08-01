const numbers = [1,2,3,4,5];
let squares = numbers.map((number, index)=> console.log(number, index));
let squares1 = numbers.map((number, index)=> number * number);
console.log(squares1);

const users = [
  {name: "Alex", age:26},
  {name: "Bob", age:30},
  {name: "Carol", age:28}
];
const usersWithBirthYear = users.map((user)=> ({
  ...user,
  birthYear: new Date().getFullYear() - user.age
}));

console.log(usersWithBirthYear);

