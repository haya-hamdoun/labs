document.addEventListener("DOMContentLoaded", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  function renderTasks_() {
    document.querySelector("#tasks").innerHTML = tasks
      .map(
        (task) => `<div class="task ${task.completed ? "complete" : ""}">
          <div class="task-title">${task.title}</div>
          <button>
            <img src="icons/${
              task.completed ? "check-" : ""
            }square.svg" alt="un/complete task" />
          </button>
          <button>
            <img src="icons/x-circle.svg" alt="delete task" />
          </button>
        </div>`
      )
      .join(".task button:first-of-type").addEventListener;
  }

  function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.complete) {
      taskDiv.classList.add("complete");
    }

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("task-title");
    titleDiv.innerText = task.title;

    const completeButton = document.createElement("button");
    const completeImg = document.createElement("img");
    completeImg.src =
      "icons/" + (task.completed ? "check-" : "") + "square.svg";
    completeImg.alt = "un/complete task";
    completeButton.appendChild(completeImg);

    const deleteButton = document.createElement("button");
    const deleteImg = document.createElement("img");
    deleteImg.src = "icons/x-circle.svg";
    deleteImg.alt = "delete task";
    deleteButton.appendChild(deleteImg);

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    completeButton.addEventListener("click", function () {
      task.completed = !task.completed;
      renderTasks();
    });

    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter((t) => t.title !== task.title);
      renderTasks();
    });

    return taskDiv;
  }

  function renderTasks() {
    const tasksDiv = document.querySelector("#tasks");
    tasksDiv.replaceChildren();
    tasks.forEach((task) => {
      tasksDiv.appendChild(renderTask(task));
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  renderTasks();

  document.querySelector("#add-task", function () {});
  document.querySelector("#clear-tasks", function () {});
});
