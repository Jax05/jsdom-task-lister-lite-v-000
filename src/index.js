document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("new-task-description").value;
  let tasks = document.getElementById("tasks");
  let task = document.createElement("li");

  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    task.innerText = input;
    tasks.appendChild(task);
  });
});
