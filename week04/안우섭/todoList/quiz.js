const todos = [];

let idCounter = 0;

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim(); //입력값의 양쪽 공백 지우기(trim)
  if (text !== "") {
    const newTodo = {
      id: idCounter++,
      text,
      done: false,
    };
    todos.push(newTodo);
    input.value = ""; //입력창 지우기
    renderList();
  }
});

function renderList() {
  list.innerHTML = "";
  todos.forEach(({ id, text }) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${text}</span>
      <button class="delete-btn" data-id="${id}">삭제</button>
    `;
    list.appendChild(li);
  });
}

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const { id } = e.target.dataset;
    const index = todos.findIndex((todo) => todo.id === Number(id));
    if (index !== -1) {
      todos.splice(index, 1);
      renderList();
    }
  }
});
