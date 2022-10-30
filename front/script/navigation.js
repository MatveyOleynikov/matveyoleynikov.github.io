const urlX = 'http://localhost:4000/subscription'
const subscription = document.querySelectorAll('.nav_block')[3]
console.log(subscription)

subscription.onclick = async () => {

    console.log(';ksdfjdsa');
    headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    console.log(headers)
    // debugger
    response = await fetch(urlX, {
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