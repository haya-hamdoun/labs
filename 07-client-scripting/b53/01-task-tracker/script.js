document.addEventListener("DOMContentLoaded", function () {
  // let tasks = [
  //   { title: "Task 1", complete: true },
  //   { title: "Task 2", complete: false },
  //   { title: "Task 3", complete: true },
  // ];
  let tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.innerText = task.title;
    taskDiv.appendChild(taskTitle);

    const completeButton = document.createElement("button");
    const completeImg = document.createElement("img");
    completeImg.src = `icons/${task.complete ? "check-" : ""}square.svg`;
    completeImg.alt = "un/complete task";
    completeButton.appendChild(completeImg);
    taskDiv.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    const deleteImg = document.createElement("img");
    deleteImg.src = `icons/x-circle.svg`;
    deleteImg.alt = "delete task";
    deleteButton.appendChild(deleteImg);
    taskDiv.appendChild(deleteButton);

    completeButton.addEventListener("click", function (e) {
      task.complete = !task.complete;
      renderTasks(tasks);
    });

    deleteButton.addEventListener("click", function (e) {
      tasks = tasks.filter((t) => t.title !== task.title);
      renderTasks(tasks);
    });

    return taskDiv;
  }

  function renderTasks(tasks) {
    document.querySelector("#tasks").replaceChildren();
    tasks.forEach((task) =>
      document.querySelector("#tasks").appendChild(renderTask(task))
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));

    if (tasks.length) {
      document.querySelector("#task-reset").classList.remove("hidden");
    } else {
      document.querySelector("#task-reset").classList.add("hidden");
    }
  }

  renderTasks(tasks);

  document.querySelector("#add-task").addEventListener("click", function (e) {
    const title = document.querySelector("#new-task-title").value.trim();
    if (!tasks.find((task) => task.title === title)) {
      tasks.push({ title, complete: false });
      renderTasks(tasks);
      document.querySelector("#new-task-title").value = "";
    }
  });

  document.querySelector("#task-reset").addEventListener("click", function (e) {
    // tasks.splice(0);
    tasks = [];
    renderTasks(tasks);
  });
});
