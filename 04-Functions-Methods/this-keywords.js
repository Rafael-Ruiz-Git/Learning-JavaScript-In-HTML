console.log(this);

let car = {
  brand: "Toyota",
  display() {
    console.log(this)
  }
};

car.display( );

function showThis() {
  console.log(this);
}

showThis();