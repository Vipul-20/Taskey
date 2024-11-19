import "./index.css";
import { yearEL, inputEL, formEl, taskListEl } from "./domSelection";
import Task from "./components/task";

// MARK:collection of tasks
let task = [];

// MARK: Toggle Task
// the function toggles the task
function toggleTask(id) {
  task = task.map((task) => {
    if (task.id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  // show uncompleted tasks
  task.sort((a, b) => a.isCompleted - b.isCompleted);
}

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
  if (!inputEL.value) {
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
    toggleTask(e.target.closest("label").id);
    renderTask();
  }
});

// get new date
// IIFE
(function () {
  const year = new Date().getFullYear();

  // MARK: Update the DOM
  yearEL.textContent = `${year}`;
})();
