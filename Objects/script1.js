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

