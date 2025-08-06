document.getElementById("exampleButton").addEventListener("click", function(event){
  console.log("this referers to this keyword",this);

  console.log(this.id);
  console.log(this.textContent);
  console.log(this.className);
  console.log(this.classList);
});


//this shows the window object when its not using the function and using arrow functions
// document.getElementById("exampleButton").addEventListener("click", (event) => {
//   console.log("this referers to this keyword",this);
//  });

