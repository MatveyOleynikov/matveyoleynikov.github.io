//const {fetch} = require("fetch")
const url_big = 'http://localhost:4000/api/all_trains' //нот фоунд (надо добавить в app)

const delete_train = async (obj) => {
    console.log("sha buim udalat")
    const train_id = obj.id.slice(13, obj.id.length)

    console.log(train_id)


    const delete_all_exrices_from_train = await fetch(url_big + "?" + new URLSearchParams({
            train_id: train_id
        }
    ));  

    window.location.href = 'trains.html';
}