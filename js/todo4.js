const todoInput4 = document.getElementById("todo-input4");
const todoList4 = document.getElementById("todo-list4");
const todoForm4 = document.getElementById("todo-form4");

let todos4 = [];

const TODOS4_KEY = "todos4";

function saveTodo4() {
  localStorage.setItem(TODOS4_KEY, JSON.stringify(todos4));
}

function deleteTodo4(event) {
  const li = event.target.parentElement;
  li.remove();

  todos4 = todos4.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo4();
}

function createTodo4(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.id = "delete-button";
  button.className = "submit-btn";
  button.innerText = "Delete";
  button.addEventListener("click", deleteTodo4);

  li.appendChild(span);
  li.appendChild(button);
  todoList4.appendChild(li);
}

function paintTodo4(event) {
  event.preventDefault();
  const newTodo = todoInput4.value;
  todoInput4.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  createTodo4(newTodoObj);
  todos4.push(newTodoObj);
  saveTodo4();
}

todoForm4.addEventListener("submit", paintTodo4);

const savedTodos4 = localStorage.getItem(TODOS4_KEY);

if (savedTodos4) {
  const parsedTodos = JSON.parse(savedTodos4);
  todos4 = parsedTodos;
  parsedTodos.forEach((element) => {
    createTodo4(element);
  });
}
