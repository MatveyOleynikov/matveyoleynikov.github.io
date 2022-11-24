const url_trains = 'http://localhost:4000/api/generate_all_trains'

const generate_all_trains = async () => {
    const response = await fetch(url_trains);
    result = await response.json();

    document.querySelector('#my-all-trains').innerHTML = "<article class=\"main-information\" id=\"all-trains\"><h1 style=\"text-align: center;\">Список упражнений</h1><div class=\"trains\" id=\"trains\">"

    for (var key in result) {
        var new_element = "<div class=\"block-train\"><img src=\"images/task.jpg\" alt=\"\" class=\"task-image\"><button class=\"pusk-button\" id=\"pusk-button-" + result[key].train_id + "\"onclick=\"makeTrainActive(this);\"></button><button class=\"mysor-button\" id=\"mysor-button-" + result[key].train_id + "\" onclick=\"delete_train(this);\"><img src=\"images/mysor.png\" alt=\"\" style = \"height: 90px; width: 90px;\"></button><div class=\"description-train\">" + result[key].name + "</div></div>";
        document.getElementById('trains').innerHTML += new_element;
    }

    // console.log(result)
}

const generation = generate_all_trains();