function greet(name= "Guest") {
console.log(`Hello, ${name}`);
};

greet();
greet("Alex");

function orderCoffee(size = "medium", type = "black"){
  console.log(`You Ordered a ${size} ${type}`);
}

orderCoffee();
orderCoffee("Small");
orderCoffee("Small", "Late");


function createGreeting (name = "Guest", message = "Welcome to our site!"){
    return `${message} ${name} `;
}

let defaultGreeting = createGreeting();
console.log(defaultGreeting);
let customGreetingForAlex = createGreeting("Alex","Happy to see you!");
console.log(customGreetingForAlex);