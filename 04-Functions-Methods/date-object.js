let currentDate = new Date();
let specificDate = new Date(2024,6,18, 15,30,0);
console.log(currentDate);
console.log(specificDate);

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());

console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());


let currentDate1= new Date();
let currentYear = currentDate1.getFullYear();
let currentMonth = currentDate1.getMonth();
let firstDayOfMonth = new Date(currentDate1);
firstDayOfMonth.setDate(1);
console.log(firstDayOfMonth);

let month = String(currentDate1.getMonth() + 1).padStart(2, '0'); 
let day = String(currentDate1.getDate()).padStart(2, '0');
let year = currentDate1.getFullYear();
let formattedDate =`${month}/${day}/${year}`
console.log(formattedDate);
console.log(day);
