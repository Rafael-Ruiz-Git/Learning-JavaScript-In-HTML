let operator = "+"; // +,-,*,/
let num1 = 10;
let num2 = 5;
let results;

switch (operator) {
  case "+": // Case for addition
    results = num1 + num2;
    console.log("Result of addition: " , results);
    break; // Break to exit the switch block
  
    case "-": // Case for subtraction
    results = num1 - num2;
    console.log("Result of subtraction: " , results);
    break; // Break to exit the switch block

  case "*": // Case for multiplication
    results = num1 * num2;
    console.log("Result of multiplication: " , results);
    break; // Break to exit the switch block

  case "/": // Case for division
    results = num1 / num2;
    console.log("Result of division: " , results);
    break; // Break to exit the switch block

      default: // Default case if no match is found
    console.log("Invalid operator");
}
// This code demonstrates the use of switch statements in JavaScript







