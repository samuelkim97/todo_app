const todoInput2 = document.getElementById("todo-input2");
const todoList2 = document.getElementById("todo-list2");
const todoForm2 = document.getElementById("todo-form2");

let todos2 = [];

const TODOS2_KEY = "todos2";

function saveTodo2() {
  localStorage.setItem(TODOS2_KEY, JSON.stringify(todos2));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  todos2 = todos2.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo2();
}

function createTodo2(newTodoObj) {
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
  todoList2.appendChild(li);
}

function paintTodo2(event) {
  event.preventDefault();
  const newTodo = todoInput2.value;
  todoInput2.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  createTodo2(newTodoObj);
  todos2.push(newTodoObj);
  saveTodo2();
}

todoForm2.addEventListener("submit", paintTodo2);

const savedTodos2 = localStorage.getItem(TODOS2_KEY);

if (savedTodos2) {
  const parsedTodos = JSON.parse(savedTodos2);
  todos2 = parsedTodos;
  parsedTodos.forEach((element) => {
    createTodo2(element);
  });
}
