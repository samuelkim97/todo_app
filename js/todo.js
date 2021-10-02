const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");

let todos = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function createTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.id = "delete-button";
  button.innerText = "Delete";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function paintTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  createTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", paintTodo);

const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach((element) => {
    createTodo(element);
  });
}
