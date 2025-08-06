document.getElementById("showHref").addEventListener("click", function (){
  console.log("Current URL: ", window.location.href);
});

document.getElementById("showHostname").addEventListener("click", function (){
  console.log("Hostname: ", window.location.hostname);
});

document.getElementById("showPathname").addEventListener("click", function (){
  console.log("showPathname: ", window.location.pathname);
});

document.getElementById("showProtocol").addEventListener("click", function (){
  console.log("showProtocol: ", window.location.protocol);
});

document.getElementById("goToSite").addEventListener("click", function (){
   window.location.assign("https://google.com");
});

console.log(window.location);