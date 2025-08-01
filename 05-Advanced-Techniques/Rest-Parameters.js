function sum(...numbers) {
 console.log(numbers);
 let total = 0;
 for (let num of numbers) {
  total += num;
 }
 return total;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6));

function multiplier(multiplier, ...numbers){
  let result = []
  for (let num of numbers) {
    result.push( num * multiplier)
      }
      return result;
}

console.log(multiplier(2,2,3,4,5,6,7,8));

