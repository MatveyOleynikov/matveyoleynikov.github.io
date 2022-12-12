const url_change_login = 'http://localhost:4000/api/users/changeLogin'

const standart_url = 'http://localhost:4000/api/users'

const changeLogin = async () => {
    console.log("changeLogin")
    document.querySelector('#main-information-profile').innerHTML = "Новый логин<br><input id =\"login-input\" type=\"text\" style=\"background-color: #e0e5f0; height: 25px; padding-left: 10px; margin-top: 10px; width:80%; max-width: 300px; border-radius: 5px;\" placeholder=\"логин\"><button class=\"push-new-login\"<button class=\"push-new-login\" onclick=\"newLogin()\">Готово</button>"
}

const newLogin = async () => {
    const login = document.getElementById('login-input').value;
    if (login.length == 0){
        return;
    }
    console.log(login)
    const account = await get_data()
    console.log("newLogin")
    console.log(account)
    console.log(account.user_id)

    
    const response = await fetch(url_change_login + "?" + new URLSearchParams({
        id: account.user_id,
        login: login
    }))

    const new_user = await response.json()

    console.log(new_user)

    const new_name = new_user.name

    //document.querySelector('#username').innerHTML = new_name
   const response_in_account = await fetch(standart_url + "?" + new URLSearchParams({
        name: new_user.name,
        password: new_user.password
    }))

    if (response_in_account.status == 200) {

        const result = await response_in_account.json();
        console.log("User Login")
        console.log(result)
        localStorage.setItem('token', result)
        //window.location.href = 'index.html';
     }
}