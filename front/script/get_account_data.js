const url_user = 'http://localhost:4000/api/users/user' //нот фоунд (надо добавить в app)

const get_data = async () => {
    headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    const response = await fetch(url_user, {
        headers: headers
    })

    if (response.status != 200){
        window.location.href ='login.html';
        localStorage.removeItem('token') 
    }

    console.log(response.status)
    const result = await response.json();

    console.log(result);

    return result;
}

const fill_username = (username) => {
    const username_container = document.getElementById('username')
    username_container.textContent = username
}

const fill_email = (email) => {
    const email_span = document.getElementById('email-span')
     email_span.textContent = email
}

const fill_username_data = async () => {

    const data = await get_data()
    fill_username(data.name)
    fill_email(data.email)

}

console.log("ffff")
fill_username_data()
