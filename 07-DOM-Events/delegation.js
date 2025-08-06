let taskList = document.getElementById("taskList");

taskList.addEventListener("click", function (event){
  if(event.target.className === "deleteButton"){
    let task = event.target.parentElement;
    taskList.removeChild(task);
    console.log("Task Deleted: ", task.textContent);
  }
});