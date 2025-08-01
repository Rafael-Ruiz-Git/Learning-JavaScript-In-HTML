let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "White"
};

let updatedCar = {...car,color: "Black"};
console.log(car);
console.log(updatedCar);


let owner = {
  name: "Alex",
  age: 26
};

let carWithOwner = {...car, ...owner};
console.log(carWithOwner);

let nestedOwner = {...car, owner : {...owner}};
console.log(nestedOwner);

let updatecar = {
  year: 2025,
  color: "Red"
};

let finalCar = {...car, ...updatecar};
console.log(finalCar);