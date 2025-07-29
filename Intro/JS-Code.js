      // anything is commented out in JavaScript
      /*      This is a multi-line comment
      still is
      */
     var name;
      name = "John";
      name = "Jane";
      console.log(name); // Output: John

      let age1 = 25;
      console.log(age); // Output: 25

      const COUNTRY = "USA";
      console.log(COUNTRY); // Output: USA

       let name = "Alex Ruiz";
     let greeting = "Hello";
     let numberstring = "1234";

     let fullgreeting = greeting + " " + name;
     console.log(fullgreeting); 
     console.log(typeof numberstring); // Output: string


     /* Numbers */
     let age = 25;
     let newage = age + 1;
     console.log(typeof age); // Output: 25
     console.log(newage); 

     /* Booleans */
      let isStudent = true;
      let isTeacher = false;
      console.log(typeof isStudent); // Output: true
      console.log(isTeacher); // Output: false

        let multilineString = "This is a\n" + "multi-line string"; 
  let multilineString2 = "This is a\n multi-line string"; 
  console.log(multilineString); 
  console.log(multilineString2); 

  let multilineString3 = `This is a
multi-line string`;
console.log(multilineString3);

let firstName = "Alex";

let greeting1 = "Hello, "+ firstName + "!" ;
let greeting3 = `Hello, ${firstName}!`;
console.log(greeting1); // Output: Hello, Alex!
console.log(greeting3); // Output: Hello, Alex!

let x = 5;
let y = 10;

let sum = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

let escapeChars = `String "Double Quotes" and Single Quotes`;
console.log(escapeChars); // Output: String "Double Quotes" and 'Single' Quotes

     let unassignedvariable;
      console.log(unassignedvariable);
      console.log("typeof unassignedvariable", typeof unassignedvariable);

      let emptyvariable = null;
      console.log("emptyvariable:",emptyvariable);
      console.log("typeof emptyvariable:", typeof emptyvariable);

        let maxInteger = Number.MAX_SAFE_INTEGER;
  console.log("maxInteger:", maxInteger);
  console.log("maxInteger:", maxInteger + 1);
  console.log("maxInteger:", maxInteger + 2);

  let bigInteger = BigInt(maxInteger);
  console.log( bigInteger);
  console.log(typeof bigInteger);
  console.log(bigInteger + 100000000000n);

  let symbol1 = Symbol();
  let symbol2 = Symbol();
  console.log(symbol1);
  console.log(symbol1 === symbol2);
  console.log(typeof symbol1);

        let sum12 = 5 + 3; // Addition
      console.log("Sum:", sum12); // Output: Sum: 8
      
      let difference = 10 - 4; // Subtraction
      console.log("Difference:", difference); // Output: Difference: 6

      let product = 7 * 6; // Multiplication
      console.log("Product:", product); // Output: Product: 42

      let quotient = 20 / 4; // Division
      console.log("Quotient:", quotient); // Output: Quotient: 5

      let remainder = 24 % 5; // Modulus
      console.log("Remainder:", remainder); // Output: Remainder: 4

      let base = 2;
      let exponent = 3;
      let power = base ** exponent; // Exponentiation
      console.log("Power:", power); // Output: Power: 8

      let value = 5;
      value++; // Increment
      console.log("Incremented Value:", value); // Output: Incremented Value: 6

      
      value--; // Decrement
      console.log("Decremented Value:", value); // Output: Decremented Value:

        let a = 5;
  a = a +3; // Using the addition operator
  a += 3; // Using the addition assignment operator
  console.log(a); // Output: 11
  
  let b = 12;
  b-=7;
  console.log(b); // Output: 5

  let c = 4;
  c *= 2; // Using the multiplication assignment operator
  console.log(c); // Output: 8

  let d = 20;
  d /= 4; // Using the division assignment operator 
  console.log(d); // Output: 5

  let num3432 = 10;
let str1 = "10";
console.log("Equal ==" ,num3432 == str1); // Output: true (loose equality)
console.log("Equal ===" ,num3432 === str1); // Output: false (strict equality)

let num23432 = 5;
let str2 = "5";

console.log("Not Equal ==" ,num23432 != str2); // Output: false (loose inequality)
console.log("Not Equal ===" ,num23432 !== str2); // Output: true (strict inequality)

let age12 = 25;
let age22 = 18;
console.log("Greater than >" ,age12 > age22); // Output: true
console.log("Less than <" ,age12 < age22); // Output: false

let score1 = 90;
let score2 = 85;
console.log("Greater than or equal to >=" ,score1 >= score2); // Output: true
console.log("less than or equal to >=" ,score1 <= score2); // Output: false