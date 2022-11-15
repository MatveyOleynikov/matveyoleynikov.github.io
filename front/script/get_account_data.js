
const url = 'http://localhost:4000/api/users/user' //нот фоунд (надо добавить в app)

const get_data = async () => {
    
    headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    const response = await fetch(url, {
        headers: headers
    })

    if (response.status != 200){
        window.location.href ='error.html';
    }
    console.log(response.status)
    const result = await response.json();
    console.log(result);
    
    //вставка в страницу
}

console.log("ffff")
get_data()
