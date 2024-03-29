// const { json } = require("body-parser");


const url = 'http://localhost:4000/api/exercises/';
let pos = 0;

const makeTimer = () => {
    const timer = document.querySelector(".timer-exercise");
    // console.log(timer);
    // console.log(timer.textContent)
    let time = parseInt(timer.textContent) * 1000;
    time = time - 1000;
    timer.textContent = time / 1000;

    return time;
}


const fillExercise = (exercise) => {

    console.log(exercise.exercise_id    )
    const timer = document.querySelector(".timer-exercise");
    timer.textContent = exercise.time;

    const name = document.querySelector(".name-exercise");
    name.textContent = exercise.name;

    const description = document.querySelector(".description-exercise");
    description.textContent = exercise.description;

    const img = document.querySelector(".image-exercise>img");
    img.src = exercise.url;

}

const findAllExerciseByTrainId = async () => {

    // localStorage.train_id = 3;

    const train_id = parseInt(localStorage.train_id);

    if (isNaN(train_id)) {
        console.log('Error');
        window.location.href = 'train.html';
    }

    let exercises = [];
    if (train_id != -1) {
        console.log(train_id)
        const response = await fetch(url + train_id);
        exercises = await response.json();
        console.log('exercise' + exercises)
        if (response.status != 200) {
            window.location.href('error.html');
        }
    }

    else {
        console.log("ffff")
        const exercisesIdList = makeRandomTrain()
        const urlWithId = 'http://localhost:4000/api/exercises/exercisesById'
        console.log("tititittii")
        console.log(exercisesIdList)
        const response = await fetch(urlWithId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
 
            body : JSON.stringify(exercisesIdList)
        })

        exercises = await response.json();
        exercises = shuffle(exercises)
        console.log(exercises)
    }

    return exercises;

}

getRandomInt = (max)=> {
    return Math.floor(Math.random() * max);
  }

const makeRandomTrain = () => {
    const exerciseSize = 28;
    const trainSize = 5;
    let exercises = []

    console.log("start")
    for(let i = 0; i < trainSize; i++){
        let x = 0;
        while(x== 0 || exercises.indexOf(x) != -1){
            x = getRandomInt(exerciseSize);
        }

        exercises.push(x);
    }

    return exercises;
}

const shuffle = (arr) =>{

    let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}

	return arr;
}

const switchExercise = (exercises) => {

    const time = makeTimer();

    if (time <= 0) {
        pos++;

        if (pos == exercises.length) {
            window.location.href = 'finish_page.html';
        }

        fillExercise(exercises[pos]);
    }

}

const makeTrain = async () => {

    const exercises = await findAllExerciseByTrainId();
    console.log(exercises)
    fillExercise(exercises[0]);
    setInterval(() => switchExercise(exercises), 1000);
}

makeTrain();


