const numbers = [5,10,15,20,25,30];
const total = numbers.reduce((accumulator, currentValue)=> {
  return currentValue + accumulator;
}, 0 );
console.log(total);

const items = [
  {name: "Apple", type: "fruit", quantity:10},
  {name: "Banana", type: "fruit", quantity:5},
  {name: "Carrot", type: "Vegetables", quantity:8},
];

const inventory = items.reduce((accumulator, item)=>{
  accumulator[item.type] = (accumulator[item.type] || 0) + item.quantity;
  return accumulator;
},{});

console.log(inventory);

