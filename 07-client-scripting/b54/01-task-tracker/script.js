document.addEventListener("DOMContentLoaded", function () {
  // const tasks = [
  //   { title: "Task 1", complete: true },
  //   { title: "Task 2", complete: false },
  //   { title: "Task 3", complete: false },
  // ];
  const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  // document.querySelector("#tasks").innerHTML = `
  //       <div class="task">
  //         <div class="task-title">Task 1</div>
  //         <button>
  //           <img src="icons/square.svg" alt="un/complete task" />
  //         </button>
  //         <button>
  //           <img src="icons/x-circle.svg" alt="delete task" />
  //         </button>
  //       </div>
  //       <div class="task complete">
  //         <div class="task-title">Task 2</div>
  //         <button>
  //           <img src="icons/check-square.svg" alt="un/complete task" />
  //         </button>
  //         <button>
  //           <img src="icons/x-circle.svg" alt="delete task" />
  //         </button>
  //       </div>`;

  function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

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
    deleteImg.alt = "delete task";
    deleteButton.appendChild(deleteImg);

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    completeButton.addEventListener("click", function () {
      task.complete = !task.complete;
      // completeImg.src = task.complete
      //   ? "icons/check-square.svg"
      //   : "icons/square.svg";
      renderTasks(tasks);
    });
    deleteButton.addEventListener("click", function () {
      tasks.splice(
        tasks.findIndex((t) => t.title === task.title),
        1
      );
      // delete element from dom
      renderTasks(tasks);
    });

    console.log(taskDiv);

    return taskDiv;
  }

  function renderTasks(tasks) {
    // state change
    document.querySelector("#tasks").replaceChildren();
    // document.querySelector("#tasks").innerHTML = null;
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

  renderTasks(tasks);

  document.querySelector("#add-task").addEventListener("click", function () {
    const title = document.querySelector("#new-task-title").value.trim();
    if (tasks.find((t) => t.title === title)) {
      return;
    }

    tasks.push({
      title,
      complete: false,
    });
    document.querySelector("#new-task-title").value = "";

    renderTasks(tasks);
  });

  // renderTask(tasks[0]);
});
