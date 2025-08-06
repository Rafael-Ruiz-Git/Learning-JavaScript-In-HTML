document.getElementById("exampleButton").addEventListener("click", function (event){
  console.log("Event.type: ",event.type);
  console.log("Event.target: ",event.target);
  console.log("Event.tagName: ",event.target.tagName);
    console.log("Event.currenttarget: ",event.currentTarget);
  console.log("Event.tagName: ",event.currentTarget.tagName);
  console.log("timestamp: ",event.timeStamp);
  console.log("mouse x position ",event.clientX);
  console.log("mouse y position ",event.clientY);

  console.log(event);
})