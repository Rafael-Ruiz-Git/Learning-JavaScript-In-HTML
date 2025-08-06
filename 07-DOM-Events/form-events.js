document.getElementById("exampleForm").addEventListener("submit", function (event){
  console.log("Form Submitted");
  event.preventDefault();
  console.log("own js code validation");
});

document.getElementById("textInput").addEventListener("input", function () {
  console.log("text input",this.value)
});

document.getElementById("emailInput").addEventListener("change", function () {
  console.log("email changed",this.value)
});

document.getElementById("passwordInput").addEventListener("focus", function () {
  console.log("password focus: ")
});

document.getElementById("passwordInput").addEventListener("blur", function () {
  console.log("password blur; ")
});

document.getElementById("checkboxInput").addEventListener("change", function () {
  console.log(this.checked ? "checked" : "unchecked");
});


document.getElementById("fileInput").addEventListener("change", function () {
  console.log(this.files);
  console.log(this.files[0]);
  console.log(this.files[0].name);
});