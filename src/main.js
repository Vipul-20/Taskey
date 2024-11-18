// import "./style.css";

import "./index.css";
import { yearEL, inputEL, formEl, taskListEl } from "./domSelection";
import Task from "./components/task";

// MARK:collection of tasks
const task = [];

// MARK: Render Task
function renderTask() {
  taskListEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  task.forEach((task) => {
    const taskEl = Task(task.value, task.isCompleted, task.id);
    fragment.appendChild(taskEl);
  });
  taskListEl.appendChild(fragment);
}

// MARK: Event Listeners
formEl.addEventListener("submit", (e) => {
  // Prevent default form submission (turant refesh page hone se rokt hai)
  e.preventDefault();

  //   checking if input is empty
  if (inputEL.value === "") {
    return;
  }
  // pushing new task to task array
  task.unshift({
    value: inputEL.value,
    isCompleted: false,
    id: crypto.randomUUID(),
  });
  inputEL.value = "";

  console.log(task);
  renderTask();
});

// tasklist
taskListEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT  ") {
    console.log(e.target.closest("label").id);
    console.log("hey");
  }
});

// get new date
// (function () {
//   const date = new Date();
//   const year = date.getFullYear();
//   yearEL.textContent = year;
// })();
