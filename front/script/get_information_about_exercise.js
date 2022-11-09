// const {fetch} = require("fetch")
// const url = 'http://localhost:4000/api/exercises' //нот фоунд (надо добавить в app)

const check_infa = async () => {
    console.log('infa ')
}

var frst = 1

console.log('bebra')

do{
    console.log('information-' + frst)
    const btn = document.getElementById('information-' + frst)
    if (!btn){
        break;
    }
    btn.onclick = check_infa;
    frst = frst + 1
    console.log(frst)
}while (true)