import "./index.html";
import "./index.sass";

const form = {
  Login: document.getElementById("Login"),
  Pass: document.getElementById("Pass"),
  Button: document.querySelector(".btn"),
  Inputs: document.querySelectorAll("input"),
  LogErr: document.getElementById("log-error"),
  PassErr: document.getElementById("pass-error"),
  LogInputErr: document.getElementById("LogInput"),
  PassInputErr: document.getElementById("PassInput"),
};

var cbElements = document.getElementById("checkbox1");

let checked = false

cbElements.addEventListener('click', function() {
  this.getElementsByClassName("check")[0].classList.toggle('active');
  this.getElementsByClassName("check-text")[0].classList.toggle('active');
  checked = !checked
  checkForm()
})


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

let entryLog = true;
let entryPass = true;
function validateLogin() {
  const  value  = form.Login.getElementsByTagName("input")[0];
  if (value.value.length >= 3) {
    form.LogErr.style.display = ''
    form.LogInputErr.style.borderColor = '#57b9ff'
    form.Login.style.color = '#57b9ff'
    entryLog = true
  } else {
    form.Button.classList.add("disable");
    form.Login.classList.remove("filled");
    form.LogInputErr.style.borderColor = 'red'
    form.Login.style.color = 'red'
    form.LogErr.style.display = 'block'
    entryLog = false
  }
  const  value2 = form.Pass.getElementsByTagName("input")[0];
  if (value2.value.length >= 3) {
    form.PassErr.style.display = ''
    form.PassInputErr.style.borderColor = '#57b9ff'
    form.Pass.style.color = '#57b9ff'
    entryPass = true
  } else {
    form.Button.classList.add("disable");
    form.Pass.classList.remove("filled");
    form.PassInputErr.style.borderColor = 'red'
    form.Pass.style.color = 'red'
    form.PassErr.style.display = 'block'
    entryPass = false
  }
  if (entryLog && entryPass) {
    alert('okay')
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
