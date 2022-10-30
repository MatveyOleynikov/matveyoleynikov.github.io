const urlSubscription = 'http://localhost:4000/subscription'
const navBlockString = '.nav_block'
const subscription = document.querySelectorAll(navBlockString)[3]
console.log(subscription)

subscription.onclick = async () => {

    console.log(';ksdfjdsa');
    headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    console.log(headers)
    // debugger
    response = await fetch(urlSubscription, {
        headers: headers
    }
    )

    if (response.status == 200){
        window.location.href = 'subscription.html';
    }

    if (response.status == 403){
        window.location.href = 'error.html';
    }
    
    const result = await resizeBy
    console.log(response)
}

if (document.querySelectorAll(navBlockString).length > 5){
    const logout = document.querySelectorAll(navBlockString)[5]
    logout.onclick = () => {
        localStorage.setItem('token', null);
    }
}