const urlSubscription = 'http://localhost:4000/subscription'
const navBlockString = '.nav_block'


const make_navigation = async () => {

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
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    }
    
    const result = await resizeBy
    console.log(response)
}


const makeProfileVisible = () => {
    
    const nav_block = document.querySelectorAll(navBlockString)
    let profile_str = 4
    let login_str = 3
    if( window.innerWidth >= 700 ){
        profile_str += 1
        login_str += 1
    }
    const profile = nav_block[profile_str]
    const login =  nav_block[login_str]
    console.log(localStorage.getItem('token'))
    console.log(nav_block)
    const token = localStorage.getItem('token');
    if ( token != null){
        console.log(profile)
        login.style.display = 'none';
        profile.style.display = 'visible';
    }
    else{
        console.log('ffffffff')
        login.style.display = 'visible';
        profile.style.display = 'none';
    }
} 

const subscription = document.querySelectorAll(navBlockString)[3]
console.log(subscription)
subscription.onclick = make_navigation

makeProfileVisible()
