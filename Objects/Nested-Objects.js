let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "grey",
  owner: {
   name: "Alex",
    age: 26, } 
};

console.log(car.owner);
console.log(car.owner.name);
car.owner.name = "Alejandro";
console.log(car.owner.name);

//new method to copy objects
let carcopy = structuredClone(car); // This creates a deep copy of the object
console.log("Car Copy:", carcopy);
carcopy.owner.name = "Alex";
console.log("Car Copy Owner Name:", carcopy.owner.name);
console.log("Original Car Owner Name:", car.owner.name);
