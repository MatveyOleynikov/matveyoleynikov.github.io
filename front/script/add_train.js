// const {fetch} = require("fetch")
// const url = 'http://localhost:4000/api/exercises' //нот фоунд (надо добавить в app)

const new_train = async () => {
    const response = await fetch(url);
    result = await response.json();
    let exercise_list = []
    //window.location.href = 'tasks.html';

    for (var key in result) {
        //console.log(result[key].exercise_id)
        //тут упражнения
        if (document.getElementById("plus-" + result[key].exercise_id + "c")){
            exercise_list.push(result[key].exercise_id)
        }
    }

    console.log(exercise_list)

    const response_2 = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(exercise_list)
        }
    );  

    const res = await response_2.json()

    console.log(res)

    window.location.href = 'trains.html';
}