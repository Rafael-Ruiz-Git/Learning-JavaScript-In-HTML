let count = 0;

// This is a simple while loop that prints the value of count
// until count is less than 5.
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// This while loop will continue until the number is between 1 and 10.
let number = 0;
while (number <1 || number > 10) {

        console.log("Number: ", number);
        number++;
    }
// This do-while loop will execute at least once, even if the condition is false.
let i = 6;
do {
  console.log("Do while:", i)
i++
} while (i<5);

// while and do-while example
let count12 = 1;
let whileResults = [];

while (count12 < 6) {
    whileResults.push(count12);
    count12++;
}


let count1 = 6;
let doWhileResults = [];

do {
    doWhileResults.push(count1);
    count1++;
} while (count1 < 11);