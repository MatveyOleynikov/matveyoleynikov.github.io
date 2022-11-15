import { projectValidator } from "./project_validator.js";

const url = 'http://localhost:4000/api/users'

const registration = async () => {
  const login = document.getElementById('login-input').value;
  const password = document.getElementById('password-input').value;
  const email = document.getElementById('email-input').value;


  //проверка
  if (validator.isEmail(email) == false) {
    alert("Email is not valid");
    return;
  }

  if (projectValidator.isLogin(login) == false) {
    alert('Login is not valid');
    return;
  }

  if (projectValidator.isPassword(password) == false) {
    alert('Password is not valid');
    return;
  }

  console.log(login + " " + password + " " + email);

  const user = {
    name: login,
    password: password,
    email: email
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  }
  );

  const result = await response.json();
  if (response.status == 200) {
    console.log(result);
    localStorage.setItem('token', result)
    window.location.href = 'index.html';
  }
  else {
    alert(result)
  }

}

const button = document.getElementById('registration-button');

button.onclick = registration;