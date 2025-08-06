const eventArea = document.getElementById("eventArea");

eventArea.addEventListener('mouseover', function(){
  console.log("Mouse over the area");
  this.style.backgroundColor = "lightblue";
});

eventArea.addEventListener('mouseout', function(){
  console.log("Mouse out the area");
  this.style.backgroundColor = "#f0f0f0";
});

eventArea.addEventListener('mousedown', function(){
  console.log("Mouse button down the area");
  this.style.backgroundColor = "lightgreen";
});

eventArea.addEventListener('mouseup', function(){
  console.log("Mouse button up the area");
  this.style.backgroundColor = "lightblue";
});

eventArea.addEventListener('click', function(){
  console.log("area was clicked");

});



