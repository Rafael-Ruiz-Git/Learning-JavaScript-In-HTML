function Car(brand, model, year, color){
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
};

let car1 = new Car("BMW", "7 Series", 2024, "White");
let car2 = new Car("Audi", "A6", 2023, "Black");

console.log(car1);
console.log(car2);

function Person(firstName, lastName, age, isMember= false){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMember = isMember;

  this.getFullName = function (){
    return `${this.firstName} ${this.lastName}`;
  }
}

let person1 = new Person("Alex", "Ruiz", 26);
console.log(person1);
let person2 = new Person("Mark", "Smith", 28, true);
console.log(person2);

console.log(person1.getFullName());
console.log(person2.getFullName());





