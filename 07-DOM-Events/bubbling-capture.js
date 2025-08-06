let outer = document.getElementById("outer");
let middle = document.getElementById("middle");
let inner = document.getElementById("inner");

function logEvent (event) {
 console.log(`${event.currentTarget.id}, ${event.type} handled at ${event.eventPhase}`);

 if(event.currentTarget.id == "middle"){
  event.stopPropagation();
  console.log("Event stopped in the middle")
 }
};


//capture
outer.addEventListener("click", logEvent, true);
middle.addEventListener("click", logEvent, true);
inner.addEventListener("click", logEvent, true);

//bubbling
outer.addEventListener("click", logEvent, false);
middle.addEventListener("click", logEvent, false);
inner.addEventListener("click", logEvent, false);