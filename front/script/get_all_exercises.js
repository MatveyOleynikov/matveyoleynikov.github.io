// const {fetch} = require("fetch")
const url = 'http://localhost:4000/api/exercises' //нот фоунд (надо добавить в app)

const new_exercise = async () => {
    console.log('xxx ')
    const response = await fetch(url);
    result = await response.json();
    //window.location.href = 'tasks.html';

    document.querySelector('#content-tasks-and-trains').innerHTML = "<article class=\"main-information\"><h1 style=\"text-align: center;\">Список упражнений</h1><div class=\"tasks\" id=\"tasks\">"

    for (var key in result) {
        var new_element = "<div class=\"block-task\"> <img src=\" " + result[key].url + " \" alt=\"\" class=\"task-image\"> <button class=\"information-button\">i <span class=\"information-buttontext\">" + result[key].description + "</span> </button> <button class=\"plus-button\" id=\"plus-" + result[key].exercise_id + "\" onclick=\"check_infa(this);\">+</button> <div class=\"description-task\"> " + result[key].name + " </div> </div>";
        document.getElementById('tasks').innerHTML += new_element;
        //document.querySelector('#tasks').append("<div class=\"block-task\"> <img src=\"images/task.jpg\" alt=\"\" class=\"task-image\"> <button class=\"information-button\">i</button> <button class=\"plus-button\">+</button> <div class=\"description-task\">Метод Хуетод</div> </div>");
        console.log(key, result[key].name)
    }

    var gotovo = "<button id=\"new-train\" onclick=\"new_train()\">Добавить в тренировку</button>";
    document.getElementById('tasks').innerHTML += gotovo;
    //console.log(result)
}

const button = document.getElementById('add-task');
console.log('ffff')
console.log(button)
button.onclick = new_exercise;