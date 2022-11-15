
console.log("adfhjslkadh")
const logout = document.querySelector('.logout-button')
console.log(logout)
logout.onclick = () => {
    console.log('logout...')
    localStorage.setItem('token', null);
    window.location.href = 'login.html'
}