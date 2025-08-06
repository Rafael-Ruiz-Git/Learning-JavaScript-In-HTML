const inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", function(){
  console.log(`Key Down:, ${event.key} code: ${event.code}`)
});

//no longer needed
inputField.addEventListener("keypress", function(){
  console.log(`Key press:, ${event.key} code: ${event.code}`)
});

inputField.addEventListener("keyup", function(){
  console.log(`Key up: ${event.key} code: ${event.code}`);
  if(event.key === "Enter"){
    console.log("Enter pressed");
    alert("Command Executed")

  }
});

