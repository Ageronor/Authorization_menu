import "./index.html";
import "./index.sass";

const form = {
  Login: document.getElementById("Login"),
  Pass: document.getElementById("Pass"),
  Button: document.querySelector(".btn"),
  Inputs: document.querySelectorAll("input"),
  LogErr: document.getElementById("log-error"),
  PassErr: document.getElementById("pass-error"),
};

var cbElements = document.getElementById("checkbox1");



function checkForm() {
  var cbElements = document.getElementsByClassName("checkbox1");
  const Login = form.Login.getElementsByTagName("input")[0].value;
  const Pass = form.Pass.getElementsByTagName("input")[0].value;

  if (Login && Pass && checked === true){
    form.Button.classList.remove("disable");
  } else {
    form.Button.classList.add("disable");
  }

}

function easyInput(event, name) {
  const { value } = event.target;
  if (value) {
    form[name].classList.add("filled");
  } else {
    form[name].classList.remove("filled");
  }
  checkForm();
}





form.Login.oninput = (event) => easyInput(event, "Login");
form.Pass.oninput = (event) => easyInput(event, "Pass");
form.Button.onclick = validateLogin
form.Inputs.forEach((input) => (input.onblur = checkForm));
