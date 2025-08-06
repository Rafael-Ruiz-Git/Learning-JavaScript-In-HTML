window.addEventListener("load", function (){
  console.log("Window fully loaded");
  // alert("Windows is loaded")
});

window.addEventListener("resize", function (){
  console.log(`Resized to: ${window.innerWidth} x ${window.innerHeight}`);
});

window.addEventListener("scroll", function (){
  console.log(`you are scrolling`);
});

window.addEventListener("beforeunload", function (event){
  let confirmationMessage = (`you are leaving?`);
  event.preventDefault();
  event.returnValue = confirmationMessage;
});

