const url = 'http://localhost:4000/api/users'

const registration = async () => {
    const login =  document.getElementById('login-input').value;
    const password = document.getElementById('password-input').value;
    const email = document.getElementById('email-input').value;

    console.log(login + " " + password + " " + email);

    user = {
        name : login,
        password: password,
        email: email
    }

    const response = await fetch(url,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      }
    );
    
    if (response.status == 200){
    result = await response.json();
    console.log(result);
    localStorage.setItem('token', result)
    window.location.href = 'index.html';
    }

    console.log(response.status);
        
}

const button = document.getElementById('registration-button');

button.onclick = registration;