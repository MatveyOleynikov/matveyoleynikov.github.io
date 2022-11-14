// const {fetch} = require("fetch")
// const url = 'http://localhost:4000/api/exercises' //нот фоунд (надо добавить в app)

const new_train = async () => {
    const response = await fetch(url);
    result = await response.json();
    //window.location.href = 'tasks.html';
    for (var key in result) {
        //console.log(result[key].exercise_id)
        //тут упражнения
        if (document.getElementById("plus-" + result[key].exercise_id + "c")){
            console.log(result[key].exercise_id)
        }
    }
}