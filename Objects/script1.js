let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "grey",
  "car owner": "Alex" // Using quotes for property with space, not a good practice but valid
};

console.log("model:", car.model);
console.log("brand:", car.brand);
console.log("owner:", car["car owner"]); // Accessing property with space using bracket notation

let audi = new Object();
audi.brand = "Audi";
audi.model = "A7";
audi.color = "Black";
audi.year = 2024;
audi["car owner"] = "Alex"; // Using quotes for property with space, not a good practice but valid
console.log("audi:", audi);


console.log( "Original Car", car);

let carcopy = car; // This creates a reference to the same object
carcopy.color = "red"; // Changing the color in the copy will also change it in the original object
console.log("Car Copy:", carcopy);
console.log( "Original Car", car);

let newcar = {...car}; // This creates a shallow copy of the object
console.log("New Car:", newcar);
newcar.color = "blue"; // Changing the color in the newcar will not affect the original object
console.log("New Car Color:", newcar.color);
