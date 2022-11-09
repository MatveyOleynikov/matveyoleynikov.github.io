const url = 'http://localhost:4000/api/users'

const login = async () => {
 const login = document.getElementById('login-input').value;
 const password = document.getElementById('password-input').value;
const response = await fetch(url + "?" +  new URLSearchParams({
    name : login,
    password: password
 }))
 
 if (response.status == 200){
   
    result = await response.json();
    console.log(result)
    localStorage.setItem('token', result)
    window.location.href = 'index.html';
 }

}

const button = document.getElementById('enter-button');
console.log(button)
button.onclick = login;