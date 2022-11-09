// const {fetch} = require("fetch")
const url = 'http://localhost:4000/api/exercises' //нот фоунд (надо добавить в app)

const new_exercise = async () => {
    console.log('xxx ')
    //window.location.href = 'tasks.html';
    const response = await fetch(url);
    result = await response.json();
    console.log(result)
}

const button = document.getElementById('add-task');
console.log('ffff')
console.log(button)
button.onclick = new_exercise;