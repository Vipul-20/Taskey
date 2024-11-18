export default function Task(content, checked) {
  const label = document.createElement("label");
  label.addEventListener("click", (e) => {
    console.log("hii");
  });
  label.className =
    " label cursor-pointer " + (checked && " bg-zinc-300 rounded");

  const span = document.createElement("span");
  span.className = "label-text";
  span.textContent = content;
  label.appendChild(span);

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.className = "checkbox checkbox-accent";
  label.appendChild(input);

  return label;
}

/* <label class="cursor-pointer label bg-zinc-300 rounded">
              <span class="label-text">Remember me</span>
              <input type="checkbox" checked 
              class="checkbox checkbox-accent" />
            </label> */
