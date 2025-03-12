document.addEventListener("DOMContentLoaded", function () {
  // const tasks = [
  //   { title: "Task 1", complete: false },
  //   { title: "Task 2", complete: false },
  //   { title: "Task 3", complete: true },
  // ];
  let tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  function renderTask(task) {
    // <div class="task complete">
    //   <div class="task-title">Task 2</div>
    //   <button>
    //     <img src="icons/check-square.svg" alt="un/complete task" />
    //   </button>
    //   <button>
    //     <img src="icons/x-circle.svg" alt="delete task" />
    //   </button>
    // </div>

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
    completeImg.src = task.complete
      ? "icons/check-square.svg"
      : "icons/square.svg";
    completeImg.alt = "un/complete task";
    completeButton.appendChild(completeImg);

    const deleteButton = document.createElement("button");
    const deleteImg = document.createElement("img");
    deleteImg.src = "icons/x-circle.svg";
    deleteButton.appendChild(deleteImg);

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    completeButton.addEventListener("click", function (e) {
      task.complete = !task.complete;

      // completeImg.src = task.complete
      //   ? "icons/check-square.svg"
      //   : "icons/square.svg";

      renderTasks(tasks);
    });
    deleteButton.addEventListener("click", function (e) {
      // tasks = tasks.filter((t) => t.title !== task.title);
      tasks.splice(
        tasks.findIndex((t) => t.title === task.title),
        1
      );

      renderTasks(tasks);
    });
    return taskDiv;
  }

  // document.querySelector("#tasks").appendChild(renderTask(tasks[0]));
  // console.log(renderTask(tasks[0]));
  function renderTasks(tasks) {
    // document.querySelector("#tasks").innerHTML = null;
    document.querySelector("#tasks").replaceChildren();
    tasks.forEach((task) =>
      document.querySelector("#tasks").appendChild(renderTask(task))
    );

    if (tasks.length) {
      document.querySelector("#task-reset").classList.remove("hidden");
    } else {
      document.querySelector("#task-reset").classList.add("hidden");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  document.querySelector("#task-reset").addEventListener("click", function () {
    // tasks.splice(0);
    tasks = [];

    renderTasks(tasks);
  });

  document.querySelector("#add-task").addEventListener("click", function (e) {
    const title = document.querySelector("#new-task-title").value.trim();
    if (tasks.find((t) => t.title === title)) {
      return;
    }

    // e.target;
    // e.preventDefault();
    // e.stopPropagation();

    tasks.push({
      title,
      complete: false,
    });
    document.querySelector("#new-task-title").value = "";
    renderTasks(tasks);
  });

  document.querySelector("#task-reset").addEventListener("click", function () {
    // tasks.splice(0);
    tasks = [];

    renderTasks(tasks);
  });

  renderTasks(tasks);
});
