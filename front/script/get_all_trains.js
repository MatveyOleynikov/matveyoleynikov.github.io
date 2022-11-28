// const {fetch} = require("fetch")
const url_trains = 'http://localhost:4000/api/all_trains' //нот фоунд (надо добавить в app)

const generate_trains = async () => {
    console.log("generation")
    //const response = await fetch(url_trains);
    const data = await get_data()

    if (!data){
        return false
    }

    console.log("polzovatel")
    console.log(data)
    console.log(data.name)
    const response_add_train = await fetch(url_trains, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
            body: JSON.stringify(data)
        }
    );  

    const result = await response_add_train.json()

    console.log(result)
    //window.location.href = 'tasks.html';

    console.log(data)

    document.querySelector('#content-tasks-and-trains').innerHTML = "<article class=\"main-information\" id=\"all-trains\"><h1 style=\"text-align: center;\">Список тренировок</h1><div class=\"trains\" id=\"trains\">"
    
    let cnt = 1;

    for (var key in result) {
        console.log(key)
        console.log(result[key])
        var new_element = "<div class=\"block-train\"><img src=\"images/task.jpg\" alt=\"\" class=\"task-image\"><button class=\"pusk-button\" id=\"pusk-button-" + result[key].train_id + "\"onclick=\"makeTrainActive(this);\"></button><button class=\"mysor-button\" id=\"mysor-button-" + result[key].train_id + "\" onclick=\"delete_train(this);\"><img src=\"images/mysor.png\" alt=\"\" style = \"height: 90px; width: 90px;\"></button><div class=\"description-train\">" + result[key].name + " " + cnt + " " + "</div></div>";
        document.getElementById('trains').innerHTML += new_element;
        //document.querySelector('#tasks').append("<div class=\"block-task\"> <img src=\"images/task.jpg\" alt=\"\" class=\"task-image\"> <button class=\"information-button\">i</button> <button class=\"plus-button\">+</button> <div class=\"description-task\">Метод Хуетод</div> </div>");
        console.log(key, result[key].name)
        cnt += 1
    }

    var gotovo = "<div class=\"block-train\"><div class=\"make-train\"><button id=\"add-task\" onclick=\"new_exercise()\"> Добавить тренировку </button></div></div>";
    document.getElementById('trains').innerHTML += gotovo;
    //var gotovo = "<button id=\"new-train\" onclick=\"new_train()\">Добавить тренировку</button>";
    //document.getElementById('tasks').innerHTML += gotovo;
}

const makeTrainActive = (obj) =>{
    //Неоходимо сюда засунуть id  выбранной тренировки
    const train_id = obj.id.slice(12, obj.id.length)
    localStorage.train_id = train_id;
    console.log(localStorage.train_id)
    window.location.href = 'exercise.html';
}

const generation = generate_trains();