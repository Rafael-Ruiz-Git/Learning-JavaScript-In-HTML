let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  
  dercribeCar: function (){
    return `This car is a ${this.year} ${this.brand} ${this.model}`;
  }
};

console.log(car.dercribeCar());

let calculator = {

  //add
  add (a,b){
    return a+b;
  },

  subtract (a,b) {
    return a-b;
  }

}

console.log(calculator.add(5,10));
console.log(calculator.subtract(5,10));