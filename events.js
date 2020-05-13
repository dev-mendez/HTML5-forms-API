import bd from "./bd/bd.js";

let validator = (a, b, c) => {
  return (a != "") & (b != "") ? bd.push(c) : null;
};

let creator = (a, b) => {
  let newDiv = document.createElement("div");
  let name = document.createTextNode(`Nombre: ${a}`);
  let email = document.createTextNode(`Email: ${b}`);

  let divDato = newDiv.appendChild(name);

  document.getElementById("table").appendChild(divDato);
};

let make = function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let dato = {
    name: name,
    email: email,
  };
  validator(name, email, dato)
    ? creator(name, email)
    : console.log("somethings wrong");
};

let send = document.addEventListener("submit", make, false);
