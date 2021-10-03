const dayBtn = document.getElementById("day-btn");
const weekBtn = document.getElementById("week-btn");
const monthBtn = document.getElementById("month-btn");
const yearBtn = document.getElementById("year-btn");

const dayForm = document.getElementById("todo-form");
const weekForm = document.getElementById("todo-form2");
const monthForm = document.getElementById("todo-form3");
const yearForm = document.getElementById("todo-form4");

const UNDERLINE_KEY = "underline";

function moveToDay() {
  dayForm.classList.remove(HIDDEN_KEY);
  weekForm.classList.add(HIDDEN_KEY);
  monthForm.classList.add(HIDDEN_KEY);
  yearForm.classList.add(HIDDEN_KEY);

  dayBtn.classList.add(UNDERLINE_KEY);
  weekBtn.classList.remove(UNDERLINE_KEY);
  monthBtn.classList.remove(UNDERLINE_KEY);
  yearBtn.classList.remove(UNDERLINE_KEY);
}

function moveToWeek() {
  dayForm.classList.add(HIDDEN_KEY);
  weekForm.classList.remove(HIDDEN_KEY);
  monthForm.classList.add(HIDDEN_KEY);
  yearForm.classList.add(HIDDEN_KEY);

  dayBtn.classList.remove(UNDERLINE_KEY);
  weekBtn.classList.add(UNDERLINE_KEY);
  monthBtn.classList.remove(UNDERLINE_KEY);
  yearBtn.classList.remove(UNDERLINE_KEY);
}

function moveToMonth() {
  dayForm.classList.add(HIDDEN_KEY);
  weekForm.classList.add(HIDDEN_KEY);
  monthForm.classList.remove(HIDDEN_KEY);
  yearForm.classList.add(HIDDEN_KEY);

  dayBtn.classList.remove(UNDERLINE_KEY);
  weekBtn.classList.remove(UNDERLINE_KEY);
  monthBtn.classList.add(UNDERLINE_KEY);
  yearBtn.classList.remove(UNDERLINE_KEY);
}

function moveToYear() {
  dayForm.classList.add(HIDDEN_KEY);
  weekForm.classList.add(HIDDEN_KEY);
  monthForm.classList.add(HIDDEN_KEY);
  yearForm.classList.remove(HIDDEN_KEY);

  dayBtn.classList.remove(UNDERLINE_KEY);
  weekBtn.classList.remove(UNDERLINE_KEY);
  monthBtn.classList.remove(UNDERLINE_KEY);
  yearBtn.classList.add(UNDERLINE_KEY);
}

dayBtn.addEventListener("click", moveToDay);
weekBtn.addEventListener("click", moveToWeek);
monthBtn.addEventListener("click", moveToMonth);
yearBtn.addEventListener("click", moveToYear);
