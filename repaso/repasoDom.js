console.log("Repaso DOM");


// Métodos para seleccionar elementos HTML

const title = document.getElementById("title");
console.log(title);

const h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements);
console.log(h1Elements[0]);

const textElements = document.getElementsByClassName("text");
console.log(textElements);

const container = document.querySelector("div");
console.log(container);

const textElems = document.querySelectorAll(".text");
console.log(textElems);
const p2Elem = textElements[2];


// Modificar elementos HTML

title.innerHTML = "Nuevo texto para el título";
title.setAttribute("id", "new-id");
title.classList.add("big");
title.classList.remove("big");


// Crear elementos HTML

const h2Elem = document.createElement("h2");
h2Elem.innerHTML = "Esto es un h2 Dinámico";
console.log(h2Elem);
container.appendChild(h2Elem);

const h3elem = document.createElement("h3");
h3elem.innerHTML = "h3 dinámico";
container.insertBefore(h3elem, p2Elem);


// Eliminar elementos HTML

// container.removeChild(h3elem);
// container.innerHTML = "";


// Eventos

title.addEventListener("click", () => {
  console.log("El título se ha clickado");
})

const btnDark = document.querySelector("#btn-dark");
const btnLight = document.querySelector("#btn-light");
console.log(btnDark, btnLight);

const body = document.querySelector("body");

btnDark.addEventListener("click", () => {
  body.classList.add("dark");
})

btnLight.addEventListener("click", () => {
  body.classList.remove("dark");
})

// const btn = document.querySelector("#btn1");
// console.log(btn);

// btn.addEventListener("click", (e) => {
//   console.log("El botón se ha pulsado");
//   console.log(e);
// })

const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("Se ha pulsado un botón");
    console.log(e.target.id);
  })
})

const username = document.querySelector("#username");
const submit = document.querySelector("#submit");
console.log(username, submit);

// submit.addEventListener("click", () => {
//   username.value = username.value.toUpperCase();
//   console.log(username.value);
// })

const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(username.value);
})
