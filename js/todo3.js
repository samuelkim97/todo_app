const todoInput3 = document.getElementById("todo-input3");
const todoList3 = document.getElementById("todo-list3");
const todoForm3 = document.getElementById("todo-form3");

let todos3 = [];

const TODOS3_KEY = "todos3";

function saveTodo3() {
  localStorage.setItem(TODOS3_KEY, JSON.stringify(todos3));
}

function deleteTodo3(event) {
  const li = event.target.parentElement;
  li.remove();

  todos3 = todos3.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo3();
}

function createTodo3(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.id = "delete-button";
  button.className = "submit-btn";
  button.innerText = "Delete";
  button.addEventListener("click", deleteTodo3);

  li.appendChild(span);
  li.appendChild(button);
  todoList3.appendChild(li);
}

function paintTodo3(event) {
  event.preventDefault();
  const newTodo = todoInput3.value;
  todoInput3.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  createTodo3(newTodoObj);
  todos3.push(newTodoObj);
  saveTodo3();
}

todoForm3.addEventListener("submit", paintTodo3);

const savedTodos3 = localStorage.getItem(TODOS3_KEY);

if (savedTodos3) {
  const parsedTodos = JSON.parse(savedTodos3);
  todos3 = parsedTodos;
  parsedTodos.forEach((element) => {
    createTodo3(element);
  });
}
