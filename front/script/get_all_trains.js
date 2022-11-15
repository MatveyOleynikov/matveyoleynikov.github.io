// const {fetch} = require("fetch")
const url_trains = 'http://localhost:4000/api/trains' //нот фоунд (надо добавить в app)

const generate_trains = async () => {
    console.log("generation")
    const response = await fetch(url_trains);
    result = await response.json();
    //window.location.href = 'tasks.html';

    for (var key in result) {
        console.log(key)
        console.log(result[key].train_id)
        //let dv = document.createElement('dv');
        /*<div class="block-task">
                <img src="images/task.jpg" alt="" class="task-image">
                <button class="information-button">i</button>
                <button class="plus-button">+</button>
                <div class="description-task">Метод Арсения</div>
            </div>*/
        /*var new_element = "<div class=\"block-task\"> <img src=\"images/task.jpg\" alt=\"\" class=\"task-image\"> <button class=\"information-button\">i <span class=\"information-buttontext\">" + result[key].description + "</span> </button> <button class=\"plus-button\" id=\"plus-" + result[key].exercise_id + "\" onclick=\"check_infa(this);\">+</button> <div class=\"description-task\"> " + result[key].name + " </div> </div>";
        document.getElementById('tasks').innerHTML += new_element;
        //document.querySelector('#tasks').append("<div class=\"block-task\"> <img src=\"images/task.jpg\" alt=\"\" class=\"task-image\"> <button class=\"information-button\">i</button> <button class=\"plus-button\">+</button> <div class=\"description-task\">Метод Хуетод</div> </div>");
        console.log(key, result[key].name)*/
    }

    //var gotovo = "<button id=\"new-train\" onclick=\"new_train()\">Добавить тренировку</button>";
    //document.getElementById('tasks').innerHTML += gotovo;
}

const generation = generate_trains();