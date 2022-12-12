const changeLogin = async () => {
    console.log("changeLogin")
    document.querySelector('#main-information-profile').innerHTML = "Новый логин<br><input id =\"login-input\" type=\"text\" style=\"background-color: #e0e5f0; height: 25px; padding-left: 10px; margin-top: 10px; width:80%; max-width: 300px; border-radius: 5px;\" placeholder=\"логин\"><button class=\"push-new-login\"<button class=\"push-new-login\" onclick=\"newLogin()\">Готово</button>"
}

const newLogin = async () => {
    const login = document.getElementById('login-input').value;
    console.log(login)
}