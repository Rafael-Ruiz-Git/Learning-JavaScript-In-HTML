let contentDiv = document.getElementById("content");

// contentDiv.innerHTML = "<p>This has been changed</p>";

let userInput = `<img src = "invalid-image" onError='alert("Hacked")'/>`;
contentDiv.innerHTML = userInput;

