const inputBox = document.getElementById("input-box");
const inputForm = document.getElementById("input-form");
const submitBtn = document.getElementById("submit-button");

const greeting = document.getElementById("greeting");

const USRNAME_KEY = "usrname";
const HIDDEN_KEY = "hidden";

let usrName = localStorage.getItem(USRNAME_KEY);

function saveUsrName(event) {
  event.preventDefault();
  localStorage.setItem(USRNAME_KEY, inputForm.value);
  usrName = inputForm.value;
  hideInputShowGreeting();
  createGreeting();
}

function hideInputShowGreeting() {
  inputBox.classList.add(HIDDEN_KEY);
  greeting.classList.remove(HIDDEN_KEY);
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
