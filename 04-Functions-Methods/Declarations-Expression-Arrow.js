greet("Alex"); // JS 1st looks for the functions inside the script, which is why this works before the declaration


// Function Declaration
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Alex");

//Function expressions
//we can't use the function expression before declaring it
const sayGoodbye = function (name){
  console.log(`Goodbye ${name}`);
}

sayGoodbye("Alex");

//Arrow Functions
//we can't use the arrow function  before declaring it
const add = (a,b) => {
  return a + b;
  };

  console.log(add(10,20));

  const multiply = (a,b) => a*b; 

  console.log(multiply(10,20));



  //instead of using if
  const findMax = function(c,d) {
    return a > b ? a : b;
  }

  let max = findMax(10,20);