const inputBox = document.getElementById("input-box");
const inputForm = document.getElementById("input-form");
const submitBtn = document.getElementById("submit-button");

const greeting = document.getElementById("greeting");

let usrName = localStorage.getItem("usrname");

function saveUsrName(event) {
  event.preventDefault();
  localStorage.setItem("usrname", inputForm.value);
  usrName = inputForm.value;
  hideInputShowGreeting();
  createGreeting();
}

function hideInputShowGreeting() {
  inputBox.classList.add("hidden");
  greeting.classList.remove("hidden");
}

function createGreeting() {
  greeting.innerText = `Have a productive day ${usrName}!`;
}

if (usrName === null) {
  inputBox.addEventListener("submit", saveUsrName);
} else {
  hideInputShowGreeting();
  createGreeting();
}
