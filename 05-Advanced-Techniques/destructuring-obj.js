const car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  year: 2024
}

const { brand, model, year} =car;
console.log(brand);
console.log(model);
console.log(year);


const {brand: carBrand, model: carModel } = car;
console.log(carBrand);

const car1 = {
  brand: "BMW",
  model: "7 Series",
  color: "Red"
}

const {color: carColor= "Black",makeyear = 2024} = car1;
console.log(carColor);
console.log(makeyear);

const carWithOwner = {
  brand: "BMW",
  model: "7 Series",
  color: "Red",
  owner: {
    name: "Alex",
    age: 26
  }
};

const {owner: {name: CarOwner, age}} =carWithOwner;
console.log(CarOwner);

const {owner, ...carDetails} = carWithOwner;
console.log(owner);
console.log(carDetails);

owner.name = "Ana";
console.log(owner);
console.log(carWithOwner);