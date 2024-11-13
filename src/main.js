// import "./style.css";

import "./index.css";
import { yearEL, inputEL, formEl } from "./domSelection";

const task = [];

// MARK: Event Listeners
formEl.addEventListener("submit", (e) => {
  // Prevent default form submission (turant refesh page hone se rokt hai)
  e.preventDefault();

  //   checking if input is empty
  if (inputEL.value === "") {
    return;
  }
  //
  task.push({
    title: inputEL.value,
    isCompleted: false,
    id: crypto.randomUUID(),
  });
  inputEL.value = "";

  console.log(task);
});

// MARK: Empty Input
input.value = "";

// Get new date function
// (() => {
//   const date = new Date();
//   const year = date.getFullYear();
//   yearEL.textContent = year;
// })();

// c
