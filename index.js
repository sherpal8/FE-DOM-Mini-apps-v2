const list = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");
const listItems = document.querySelectorAll("li");

const addTodo = event => {
  event.preventDefault();
  const newTodo = input.value;
  const newElement = document.createElement("li");
  newElement.innerText = newTodo;
  list.appendChild(newElement);
  input.value = "";
};

form.addEventListener("submit", addTodo);

const onClick = event => {
  event.target.classList.toggle("crossOut");
};
list.addEventListener("click", onClick);
// listItems.forEach(item => {
//   item.addEventListener("click", onClick);
// });
