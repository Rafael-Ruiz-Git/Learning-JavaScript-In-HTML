function sum(a,b,c) {
  return a + b + c;
}

const numbers = [1,2,3];

let result = sum(...numbers);
console.log(result);

function multiply(a,b,c,d){
  return a*b*c*d;
}

const num1 = [2,3];
const num2 = [4,5];
console.log(multiply(...num1,...num2));