const formField = document.querySelector("#form");
const header = document.querySelector("#header");
const primaryArticle = document.querySelector("#primaryArticle");
const secondaryArticle = document.querySelector("#secondaryArticle");
const container = document.querySelector("#container");
const main = document.querySelector("#main");
const button = document.querySelector("#button");

eventListerners();
function eventListerners() {
  formField.addEventListener("submit", submitForm);
  button.addEventListener("click", dismissMessage);
}

function submitForm(e) {
  e.preventDefault();

  const email = document.querySelector("#email");
  const emailValue = document.querySelector("#email").value;
  const regex = /^(\w{2,})[@](\w{2,}[.](\w{3}))$/g;
  const found = regex.test(emailValue);

  if (found) {
    email.classList.add("correct");
    successMessage();
  } else {
    email.style.backgroundColor = "rgb(249, 233, 227)";
    email.style.borderColor = "orangered";
    errorMessage(email);
  }
}

function successMessage() {
  container.style.width = "25rem";
  container.style.height = "auto";
  main.style.paddingTop = "0.5rem";
  main.style.paddingBottom = "1rem";
  main.style.paddingLeft = "0";
  header.style.display = "none";
  primaryArticle.style.display = "none";
  secondaryArticle.style.display = "block";
}

function errorMessage(email) {
  const warning = document.createElement("div");
  warning.textContent = "Valid email required";
  warning.classList.add("error");
  warning.style.marginLeft = "22.9em";
  warning.style.color = "orangered";
  warning.style.fontWeight = "550";
  warning.style.fontSize = "clamp(0.3rem, 1.1vw, 0.7rem)";

  setTimeout(() => {
    document.querySelector(".error").remove();
  }, 3000);

  formField.insertBefore(warning, email);
}

function dismissMessage() {
  window.location.reload();
}
