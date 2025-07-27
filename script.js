function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}

function editTask(btn) {
  const li = btn.parentElement;
  const span = li.querySelector("span");

  if (btn.textContent === "Edit") {
    const input = document.createElement("input");
    input.value = span.textContent;
    li.classList.add("editing");
    li.replaceChild(input, span);
    btn.textContent = "Save";
  } else {
    const input = li.querySelector("input");
    const span = document.createElement("span");
    span.textContent = input.value;
    li.classList.remove("editing");
    li.replaceChild(span, input);
    btn.textContent = "Edit";
  }
}