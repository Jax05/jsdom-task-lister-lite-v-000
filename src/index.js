document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("new-task-description").innerText;
  let tasks = document.getElementById("tasks");
  let task = document.createElement("li");

  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    console.log(input);
    // task.innerText = input;
    tasks.appendChild(task);
  });
});
