document.addEventListener("DOMContentLoaded", () => {
  let tasks = document.getElementById("tasks");

  document.getElementById("submit").addEventListener("click", function(event) {
    let input = document.getElementById("new-task-description").value;
    let task = document.createElement("li");

    event.preventDefault();
    task.innerText = input;
    tasks.append(task);
  });
});
