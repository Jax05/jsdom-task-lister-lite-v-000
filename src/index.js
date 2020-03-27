document.addEventListener("DOMContentLoaded", () => {
  let tasks = document.getElementById("tasks");
  let task = document.createElement("li");

  document.getElementById("submit").addEventListener("click", function(event) {
    let input = document.getElementById("new-task-description").value;

    event.preventDefault();
    tasks.append(task.innerText = input);
  });
});
