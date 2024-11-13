// import "./style.css";
import { Input } from "postcss";
import "./index.css";

// MARK: DOM Selectors
const yearEL = document.querySelector("date");
const inputEL = document.querySelector("input");
const formEl = document.querySelector("form");

// MARK: Event Listeners
formEl.addEventListener("submit", (e) => {
  // Prevent default form submission (turant refesh page hone se rokt hai)
  e.preventDefault();
  console.log(inputEL.value);
});

// MARK: Empty Input
input.value = "";



// Get new date function
// (() => {
//   const date = new Date();
//   const year = date.getFullYear();
//   yearEL.textContent = year;
// })();
