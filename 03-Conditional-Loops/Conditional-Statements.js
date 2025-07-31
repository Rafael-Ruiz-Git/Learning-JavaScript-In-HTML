let age =20;
let age1 =16;

if (age >= 18) {
    console.log("You are an adult.");
    console.log("You are elegible to work.");
    }
else console.log("You are not an adult.");

if (age1 >= 18) {
    console.log("You are an adult.");
    console.log("You are elegible to work.");
    }
else console.log("You are not an adult.");

let score = 85;

if (score >= 90) {
    console.log("You got an A.");
}
else if (score >= 80) {
    console.log("You got a B.");
}
else if (score >= 70) {
    console.log("You got a C.");
}
else if (score >= 60) {
    console.log("You got a D.");
}
else {
    console.log("You failed the exam.");
}



// Nested Conditional Statements Example
let isWeekend = true;
let isSunny = false;

if(isWeekend) {
    if(isSunny) {
        console.log("It's a sunny weekend, let's go to the beach!");}
        else {
        console.log("It's a weekend, but not sunny, let's stay in and relax.");}
    }
else {
    console.log("It's a weekday, time to work!");
}


// Example of using null in a conditional statement
let x = null;// or let x = undefined; or let x = 0; is also a falsy value
if(x) {
    console.log("x does not exist");
} else {
    console.log(x);
}